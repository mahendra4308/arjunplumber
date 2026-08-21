const categorySidebar = document.getElementById("categorySidebar");
const categoryOverlay = document.getElementById("categoryOverlay");
const allCategoryBtn = document.querySelector(".all-category-btn");
const categoryButtons = document.querySelectorAll(".category-card");
const sidebarLinks = document.querySelectorAll(".sidebar-list a");
const productList = document.getElementById("productList");
const searchInput = document.getElementById("searchInput");
const whatsappBar = document.querySelector(".whatsapp-send");

// ========================================
// GET ALL CATEGORIES (including custom)
// ========================================

function getAllCategories() {
  // Default categories
  const defaultCategories = ['PVC', 'CPVC', 'Sanitary'];
  
  // Custom categories from localStorage
  const customCategories = JSON.parse(
    localStorage.getItem("customCategories") || "[]"
  );
  
  // Combine and remove duplicates
  const allCategories = [...defaultCategories];
  
  customCategories.forEach(cat => {
    if (!allCategories.some(c => c.toLowerCase() === cat.toLowerCase())) {
      allCategories.push(cat);
    }
  });
  
  return allCategories;
}

// ========================================
// RENDER SIDEBAR CATEGORIES
// ========================================

function renderSidebarCategories() {
  const sidebarList = document.getElementById("sidebarList");
  if (!sidebarList) return;
  
  const categories = getAllCategories();
  
  // Generate sidebar links
  let html = `<a href="#" class="category-link" data-category="All Products">All Products</a>`;
  
  categories.forEach(cat => {
    html += `<a href="#" class="category-link" data-category="${cat}">${cat}</a>`;
  });
  
  sidebarList.innerHTML = html;
  
  // Remove old sidebarLinks reference and add new events
  const newSidebarLinks = sidebarList.querySelectorAll(".category-link");
  newSidebarLinks.forEach(link => {
    link.addEventListener("click", function(e) {
      e.preventDefault();
      const category = this.dataset.category;
      closeCategoryMenu();
      setActiveCategory(category);
      renderProducts(category, searchInput ? searchInput.value : "");
    });
  });
  
  // Update active state
  setActiveCategory(activeCategory || "All Products");
}

function loadProducts() {
  const addedProducts = JSON.parse(
    localStorage.getItem("addedProducts") || "[]"
  );

  const deletedIds = JSON.parse(
    localStorage.getItem("deletedProducts") || "[]"
  );

  const finalDefault = defaultProducts.filter(
    product => !deletedIds.includes(product.id)
  );

  const finalAdded = addedProducts.filter(
    product => !deletedIds.includes(product.id)
  );

  return [...finalDefault, ...finalAdded];
}

// Sirf ek baar products declare hoga
let products = loadProducts();

let currentCategory = "All Products";
let activeCategory = "All Products";

function refreshProducts() {
  products = loadProducts();

  if (productList) {
    renderProducts(
      currentCategory,
      searchInput ? searchInput.value : ""
    );
  }
}

// LocalStorage change hone par refresh
window.addEventListener("storage", function(e) {
  if (
    e.key === "addedProducts" ||
    e.key === "deletedProducts" ||
    e.key === "customCategories"
  ) {
    renderSidebarCategories();
    refreshProducts();
  }
});

// Page focus hone par refresh
window.addEventListener("focus", function() {
  renderSidebarCategories();
  refreshProducts();
});

// ========================================
// CATEGORY SIDEBAR
// ========================================

function openCategoryMenu() {
  if (categorySidebar) categorySidebar.classList.add("open");
  if (categoryOverlay) categoryOverlay.classList.add("show");
  document.body.style.overflow = "hidden";
  if (whatsappBar) whatsappBar.classList.add("hide");
}

function closeCategoryMenu() {
  if (categorySidebar) categorySidebar.classList.remove("open");
  if (categoryOverlay) categoryOverlay.classList.remove("show");
  document.body.style.overflow = "auto";
  if (whatsappBar) whatsappBar.classList.remove("hide");
}

if (allCategoryBtn) {
  allCategoryBtn.addEventListener("click", function(e) {
    e.preventDefault();
    e.stopPropagation();
    openCategoryMenu();
  });
}

if (categoryOverlay) {
  categoryOverlay.addEventListener("click", closeCategoryMenu);
}

document.addEventListener("keydown", function(e) {
  if (e.key === "Escape") {
    closeCategoryMenu();
  }
});

// ========================================
// ACTIVE CATEGORY
// ========================================

function setActiveCategory(category) {
  activeCategory = category;

  // Update top category buttons
  categoryButtons.forEach(btn => {
    btn.classList.remove("active");
    if (
      btn.textContent.trim().toLowerCase() ===
      category.toLowerCase()
    ) {
      btn.classList.add("active");
    }
  });

  // Update sidebar links
  const allLinks = document.querySelectorAll("#sidebarList .category-link");
  allLinks.forEach(link => {
    link.classList.remove("active");
    if (
      link.dataset.category.toLowerCase() ===
      category.toLowerCase()
    ) {
      link.classList.add("active");
    }
  });
}

// ========================================
// RENDER PRODUCTS
// ========================================

function renderProducts(category = currentCategory, keyword = "") {
  if (!productList) return;

  currentCategory = category;
  products = loadProducts();

  const filtered = products.filter(product => {
    const matchCategory =
      category === "All Products" ||
      product.category === "All Products" ||
      product.category.toLowerCase() === category.toLowerCase();

    const matchSearch =
      product.name.toLowerCase().includes(keyword.toLowerCase()) ||
      product.category.toLowerCase().includes(keyword.toLowerCase());

    return matchCategory && matchSearch;
  });

  if (filtered.length === 0) {
    productList.innerHTML = `<div style="text-align:center;padding:30px;color:#8b1238;font-weight:600;">Product not found</div>`;
    return;
  }

  productList.innerHTML = filtered.map(product => `<div class="product-row">
    <div class="product-info">
      <div>
        <div class="product-name">${product.name}</div>
        <span class="product-tag">${product.category}</span>
      </div>
    </div>

    <div class="size-dropdown">
      <button class="size-btn">
        <span>${product.sizes[0]}</span>
        <i class="fas fa-chevron-down"></i>
      </button>

      <div class="size-options">
        ${product.sizes.map(size => `<div>${size}</div>`).join("")}
      </div>
    </div>

    <div class="qty-control">
      <button class="qty-btn minus">-</button>
      <input type="number" class="qty-input" value="1" min="1">
      <button class="qty-btn plus">+</button>
    </div>

    <button class="add-btn">ADD</button>
  </div>`).join("");

  attachEvents();
  attachAddButtons();
  updateWhatsappButton();
}

// ========================================
// QUANTITY + SIZE DROPDOWN
// ========================================

function attachEvents() {
  document.querySelectorAll(".product-row").forEach(row => {
    const input = row.querySelector(".qty-input");

    row.querySelector(".plus").onclick = () => {
      input.value = parseInt(input.value || 1) + 1;
    };

    row.querySelector(".minus").onclick = () => {
      if (parseInt(input.value || 1) > 1) {
        input.value = parseInt(input.value) - 1;
      }
    };

    const dropdown = row.querySelector(".size-dropdown");
    const btn = dropdown.querySelector(".size-btn");
    const text = btn.querySelector("span");

    btn.onclick = (e) => {
      e.stopPropagation();

      document.querySelectorAll(".size-dropdown").forEach(d => {
        if (d !== dropdown) d.classList.remove("open");
      });

      dropdown.classList.toggle("open");
    };

    dropdown.querySelectorAll(".size-options div").forEach(option => {
      option.onclick = () => {
        text.textContent = option.textContent;
        dropdown.classList.remove("open");
      };
    });
  });
}

// Close dropdown
document.addEventListener("click", function() {
  document.querySelectorAll(".size-dropdown").forEach(d => {
    d.classList.remove("open");
  });
});

// ========================================
// CATEGORY FILTER - TOP BUTTONS
// ========================================

categoryButtons.forEach(button => {
  button.addEventListener("click", function() {
    const category = this.textContent.trim();

    setActiveCategory(category);

    renderProducts(
      category,
      searchInput ? searchInput.value : ""
    );
  });
});

// ========================================
// SEARCH
// ========================================

if (searchInput) {
  searchInput.addEventListener("input", function() {
    renderProducts(
      currentCategory,
      this.value
    );
  });
}

// ========================================
// WHATSAPP ORDER SYSTEM
// ========================================

let selectedProducts = [];

function attachAddButtons() {
  document.querySelectorAll(".product-row").forEach(row => {
    const addBtn = row.querySelector(".add-btn");

    addBtn.onclick = () => {
      const name = row.querySelector(".product-name").textContent;
      const category = row.querySelector(".product-tag").textContent;
      const size = row.querySelector(".size-btn span").textContent;
      const qty = parseInt(row.querySelector(".qty-input").value || 1);

      const key = name + "|" + size;

      const index = selectedProducts.findIndex(
        p => p.key === key
      );

      if (index > -1) {
        selectedProducts.splice(index, 1);

        addBtn.textContent = "ADD";
        addBtn.style.background = "#8b1238";

      } else {
        selectedProducts.push({
          key,
          name,
          category,
          size,
          qty
        });

        addBtn.textContent = "ADDED";
        addBtn.style.background = "#25D366";
      }

      updateWhatsappButton();
    };
  });
}

function updateWhatsappButton() {
  const btn = document.getElementById("sendWhatsappBtn");

  if (!btn) return;

  const total = selectedProducts.reduce(
    (sum, item) => sum + item.qty,
    0
  );

  btn.innerHTML =
    `<i class="fab fa-whatsapp"></i> Send on WhatsApp (${total})`;
}

// ========================================
// RESET SELECTED PRODUCTS
// ========================================

function resetSelectedProducts() {
  // Selected products clear
  selectedProducts = [];

  // Sabhi buttons ko normal ADD state me lao
  document.querySelectorAll(".add-btn").forEach(btn => {
    btn.textContent = "ADD";
    btn.style.background = "#8b1238";
  });

  // WhatsApp count reset
  updateWhatsappButton();
}

// ========================================
// SEND ON WHATSAPP
// ========================================

const sendWhatsappBtn = document.getElementById("sendWhatsappBtn");

if (sendWhatsappBtn) {
  sendWhatsappBtn.addEventListener("click", () => {

    if (selectedProducts.length === 0) {
      alert("Please select at least one product");
      return;
    }

    const today = new Date();

    const date =
      `${today.getDate()}/` +
      `${today.getMonth() + 1}/` +
      `${today.getFullYear()}`;

    let message = `ARJUN PLUMBER\n`;
    message += `${date}\n\n`;
    message += `______\n`;

    // ====================================
    // CATEGORY SIZE PRODUCT NAME QTY
    // SAME LINE
    // inch REMOVE
    // ====================================

    selectedProducts.forEach(item => {

      const cleanSize = item.size
        .replace(/\s*inch\b/gi, "")
        .trim();

      message +=
        `${item.category} ${cleanSize} ${item.name} ${item.qty} Ps\n`;
    });

    const total = selectedProducts.reduce(
      (sum, item) => sum + item.qty,
      0
    );

    message += `______\n`;
    message += `Total Products: ${total}\n\n`;
    message += `Thank you! Arjun Plumbing Mart`;

    const encodedMessage = encodeURIComponent(message);

    // WhatsApp open
    window.open(
      `https://wa.me/?text=${encodedMessage}`,
      "_blank"
    );

    // ====================================
    // SEND KE BAAD WEBSITE RESET
    // ====================================

    resetSelectedProducts();
  });
}

// ========================================
// SEARCH FOCUS
// ========================================

if (searchInput && whatsappBar) {

  searchInput.addEventListener("focus", () => {
    whatsappBar.classList.add("hide");
  });

  searchInput.addEventListener("blur", () => {
    setTimeout(() => {
      whatsappBar.classList.remove("hide");
    }, 150);
  });
}

// ========================================
// LEFT MENU
// ========================================

const sideMenu = document.getElementById("sideMenu");
const menuOverlay = document.getElementById("menuOverlay");
const menuBtn = document.querySelector(".menu-btn");

function openMenu() {
  if (sideMenu) sideMenu.classList.add("open");
  if (menuOverlay) menuOverlay.classList.add("show");

  document.body.style.overflow = "hidden";

  if (whatsappBar) {
    whatsappBar.classList.add("hide");
  }
}

function closeMenu() {
  if (sideMenu) sideMenu.classList.remove("open");
  if (menuOverlay) menuOverlay.classList.remove("show");

  document.body.style.overflow = "auto";

  if (whatsappBar) {
    whatsappBar.classList.remove("hide");
  }
}

if (menuBtn) {
  menuBtn.addEventListener("click", function(e) {
    e.preventDefault();
    e.stopPropagation();

    openMenu();
  });
}

if (menuOverlay) {
  menuOverlay.addEventListener("click", closeMenu);
}

document.querySelectorAll(".menu-list a").forEach(link => {

  link.addEventListener("click", function() {

    document
      .querySelectorAll(".menu-list a")
      .forEach(item => item.classList.remove("active"));

    this.classList.add("active");

    closeMenu();
  });

});

// ========================================
// INITIAL LOAD
// ========================================

if (productList) {

  // Render sidebar categories first
  renderSidebarCategories();

  // Set default category
  setActiveCategory("All Products");

  // Render products
  renderProducts("All Products");
}