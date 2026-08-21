/* =========================================================
   ARJUN PLUMBING MART
   ADMIN.JS
   COMPLETE VERSION
========================================================= */


/* =========================================================
   ELEMENTS
========================================================= */

const addProductForm =
  document.getElementById("addProductForm");

const categorySelect =
  document.getElementById("categorySelect");

const categorySelectBtn =
  categorySelect
    ? categorySelect.querySelector(".select-btn")
    : null;

const categoryOptions =
  document.getElementById("categoryOptions");

const selectedCategory =
  categorySelectBtn
    ? categorySelectBtn.querySelector("span")
    : null;

const newCategoryName =
  document.getElementById("newCategoryName");

const productName =
  document.getElementById("productName");

const sizeContainer =
  document.getElementById("sizeContainer");

const addSizeBtn =
  document.getElementById("addSizeBtn");

const sizeCount =
  document.getElementById("sizeCount");

const deleteSearch =
  document.getElementById("deleteSearch");

const clearSearch =
  document.getElementById("clearSearch");

const deletePreview =
  document.getElementById("deletePreview");

const productCount =
  document.getElementById("productCount");

const toggleAllProducts =
  document.getElementById("toggleAllProducts");


/* =========================================================
   STORAGE KEYS
========================================================= */

const ADDED_PRODUCTS_KEY =
  "addedProducts";

const DELETED_PRODUCTS_KEY =
  "deletedProducts";

const HIDDEN_PRODUCTS_KEY =
  "hiddenProducts";

const CUSTOM_CATEGORIES_KEY =
  "customCategories";


/* =========================================================
   STORAGE HELPERS
========================================================= */

function getStorageArray(key) {

  try {

    const data =
      JSON.parse(
        localStorage.getItem(key) || "[]"
      );

    return Array.isArray(data)
      ? data
      : [];

  } catch (error) {

    return [];

  }

}


function saveStorageArray(key, data) {

  localStorage.setItem(
    key,
    JSON.stringify(data)
  );

}


/* =========================================================
   UNIQUE ID
========================================================= */

function createId() {

  return (
    "product_" +
    Date.now() +
    "_" +
    Math.random()
      .toString(36)
      .substring(2, 9)
  );

}


/* =========================================================
   ESCAPE HTML
========================================================= */

function escapeHTML(value) {

  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");

}


/* =========================================================
   DEFAULT PRODUCTS
========================================================= */

function getDefaultProducts() {

  if (
    typeof defaultProducts !== "undefined" &&
    Array.isArray(defaultProducts)
  ) {

    return defaultProducts;

  }

  return [];

}


/* =========================================================
   ADDED PRODUCTS
========================================================= */

function getAddedProducts() {

  return getStorageArray(
    ADDED_PRODUCTS_KEY
  );

}


/* =========================================================
   DELETED PRODUCTS
========================================================= */

function getDeletedIds() {

  return getStorageArray(
    DELETED_PRODUCTS_KEY
  );

}


/* =========================================================
   HIDDEN PRODUCTS
========================================================= */

function getHiddenIds() {

  return getStorageArray(
    HIDDEN_PRODUCTS_KEY
  );

}


/* =========================================================
   CUSTOM CATEGORIES
========================================================= */

function getCustomCategories() {

  return getStorageArray(
    CUSTOM_CATEGORIES_KEY
  );

}


/* =========================================================
   ALL PRODUCTS
========================================================= */

function getAllProducts() {

  const defaultProductsList =
    getDefaultProducts();

  const addedProductsList =
    getAddedProducts();

  const deletedIds =
    getDeletedIds();


  const allProducts = [

    ...defaultProductsList,

    ...addedProductsList

  ];


  return allProducts.filter(
    product => {

      return !deletedIds.some(
        deletedId =>

          String(deletedId) ===
          String(product.id)

      );

    }
  );

}


/* =========================================================
   SAVE NEW CATEGORY
========================================================= */

function saveCustomCategory(categoryName) {

  const name =
    String(categoryName || "")
      .trim();


  if (!name) {

    return null;

  }


  const categories =
    getCustomCategories();


  const exists =
    categories.some(
      category =>

        String(category)
          .trim()
          .toLowerCase() ===
        name.toLowerCase()

    );


  if (!exists) {

    categories.push(name);


    saveStorageArray(
      CUSTOM_CATEGORIES_KEY,
      categories
    );

  }


  return name;

}


/* =========================================================
   GET ALL CATEGORIES
========================================================= */

function getAllCategories() {

  const categories = [];


  /*
     Products se categories
  */

  const products =
    getAllProducts();


  products.forEach(
    product => {

      const category =
        String(
          product.category || ""
        ).trim();


      if (
        category &&
        category !== "All Products"
      ) {

        const exists =
          categories.some(
            item =>

              item.toLowerCase() ===
              category.toLowerCase()

          );


        if (!exists) {

          categories.push(
            category
          );

        }

      }

    }
  );


  /*
     Custom categories
  */

  const customCategories =
    getCustomCategories();


  customCategories.forEach(
    category => {

      const name =
        String(category || "")
          .trim();


      if (!name) return;


      const exists =
        categories.some(
          item =>

            item.toLowerCase() ===
            name.toLowerCase()

        );


      if (!exists) {

        categories.push(name);

      }

    }
  );


  return categories;

}


/* =========================================================
   CATEGORY DROPDOWN
========================================================= */

function renderCategories() {

  if (!categoryOptions) return;


  const categories =
    getAllCategories();


  if (categories.length === 0) {

    categoryOptions.innerHTML = `

      <div class="select-option">

        No Category Found

      </div>

    `;

    return;

  }


  categoryOptions.innerHTML =

    categories
      .map(
        category => `

          <div
            class="select-option"
            data-category="${escapeHTML(category)}"
          >

            ${escapeHTML(category)}

          </div>

        `
      )
      .join("");


  categoryOptions
    .querySelectorAll(
      ".select-option"
    )
    .forEach(option => {

      option.addEventListener(
        "click",
        function(e) {

          e.stopPropagation();


          const category =
            this.dataset.category;


          if (!category) return;


          if (selectedCategory) {

            selectedCategory.textContent =
              category;

          }


          categoryOptions
            .querySelectorAll(
              ".select-option"
            )
            .forEach(item => {

              item.classList.remove(
                "active"
              );

            });


          this.classList.add(
            "active"
          );


          if (categorySelect) {

            categorySelect.classList.remove(
              "open"
            );

          }

        }
      );

    });

}


/* =========================================================
   OPEN CATEGORY SELECT
========================================================= */

if (categorySelectBtn) {

  categorySelectBtn.addEventListener(
    "click",
    function(e) {

      e.stopPropagation();


      categorySelect.classList.toggle(
        "open"
      );

    }
  );

}


/* =========================================================
   CLOSE CATEGORY SELECT
========================================================= */

document.addEventListener(
  "click",
  function() {

    if (categorySelect) {

      categorySelect.classList.remove(
        "open"
      );

    }

  }
);


/* =========================================================
   SIZE COUNT
========================================================= */

function updateSizeNumbers() {

  if (!sizeContainer) return;


  const rows =
    sizeContainer.querySelectorAll(
      ".size-row"
    );


  rows.forEach(
    (row, index) => {

      const number =
        row.querySelector(
          ".size-number"
        );


      if (number) {

        number.textContent =
          index + 1;

      }

    }
  );


  if (sizeCount) {

    sizeCount.textContent =
      `${rows.length} ${
        rows.length === 1
          ? "Size"
          : "Sizes"
      }`;

  }

}


/* =========================================================
   ADD SIZE
========================================================= */

if (addSizeBtn) {

  addSizeBtn.addEventListener(
    "click",
    function() {

      if (!sizeContainer) return;


      const row =
        document.createElement(
          "div"
        );


      row.className =
        "size-row";


      row.innerHTML = `

        <div class="size-number">
          1
        </div>

        <input
          type="text"
          class="size-input"
          placeholder="Example: 3/4 inch"
          autocomplete="off"
        >

        <button
          type="button"
          class="remove-size"
          title="Remove Size"
        >

          <i class="fas fa-trash"></i>

        </button>

      `;


      sizeContainer.appendChild(
        row
      );


      updateSizeNumbers();


      const input =
        row.querySelector(
          ".size-input"
        );


      if (input) {

        input.focus();

      }

    }
  );

}


/* =========================================================
   REMOVE SIZE
========================================================= */

if (sizeContainer) {

  sizeContainer.addEventListener(
    "click",
    function(e) {

      const removeButton =
        e.target.closest(
          ".remove-size"
        );


      if (!removeButton) return;


      const rows =
        sizeContainer.querySelectorAll(
          ".size-row"
        );


      /*
         Minimum 1 size
      */

      if (rows.length <= 1) {

        const input =
          rows[0].querySelector(
            ".size-input"
          );


        if (input) {

          input.value = "";

        }


        return;

      }


      const row =
        removeButton.closest(
          ".size-row"
        );


      if (row) {

        row.remove();

      }


      updateSizeNumbers();

    }
  );

}


/* =========================================================
   GET SIZES
========================================================= */

function getSizes() {

  if (!sizeContainer) {

    return [];

  }


  const inputs =
    sizeContainer.querySelectorAll(
      ".size-input"
    );


  return Array.from(inputs)
    .map(
      input =>
        input.value.trim()
    )
    .filter(
      value =>
        value.length > 0
    );

}


/* =========================================================
   ADD PRODUCT
========================================================= */

if (addProductForm) {

  addProductForm.addEventListener(
    "submit",
    function(e) {

      e.preventDefault();


      /* =========================================
         CATEGORY LOGIC

         Priority:

         1. New Category
         2. Selected Category
         3. All Products
      ========================================= */


      let selected =
        selectedCategory
          ? selectedCategory.textContent.trim()
          : "";


      const newCategory =
        newCategoryName
          ? newCategoryName.value.trim()
          : "";


      let finalCategory =
        "All Products";


      /*
         NEW CATEGORY
      */

      if (newCategory) {

        finalCategory =
          saveCustomCategory(
            newCategory
          );

      }


      /*
         SELECTED CATEGORY
      */

      else if (
        selected &&
        selected !==
          "Select Category"
      ) {

        finalCategory =
          selected;

      }


      /*
         OTHERWISE:

         All Products
      */


      /* =========================================
         PRODUCT NAME
      ========================================= */

      const name =
        productName
          ? productName.value.trim()
          : "";


      if (!name) {

        showAdminMessage(
          "Product name enter karein.",
          "error"
        );


        if (productName) {

          productName.focus();

        }


        return;

      }


      /* =========================================
         SIZES
      ========================================= */

      const sizes =
        getSizes();


      if (sizes.length === 0) {

        showAdminMessage(
          "Kam se kam 1 size add karein.",
          "error"
        );

        return;

      }


      /* =========================================
         GET ADDED PRODUCTS
      ========================================= */

      const addedProducts =
        getAddedProducts();


      /* =========================================
         CREATE PRODUCT
      ========================================= */

      const product = {

        id: createId(),

        name: name,

        category:
          finalCategory ||
          "All Products",

        sizes: sizes,

        createdAt:
          new Date().toISOString()

      };


      /* =========================================
         SAVE
      ========================================= */

      addedProducts.push(
        product
      );


      saveStorageArray(
        ADDED_PRODUCTS_KEY,
        addedProducts
      );


      /* =========================================
         RESET FORM
      ========================================= */

      if (productName) {

        productName.value = "";

      }


      if (newCategoryName) {

        newCategoryName.value = "";

      }


      if (selectedCategory) {

        selectedCategory.textContent =
          "Select Category";

      }


      if (sizeContainer) {

        sizeContainer.innerHTML = `

          <div class="size-row">

            <div class="size-number">
              1
            </div>

            <input
              type="text"
              class="size-input"
              placeholder="Example: 1/2 inch"
              autocomplete="off"
            >

            <button
              type="button"
              class="remove-size"
              title="Remove Size"
            >

              <i class="fas fa-trash"></i>

            </button>

          </div>

        `;

      }


      updateSizeNumbers();


      /* =========================================
         REFRESH ADMIN
      ========================================= */

      renderCategories();

      renderProductPreview();


      /* =========================================
         SUCCESS
      ========================================= */

      showAdminMessage(
        `"${name}" ${
          finalCategory === "All Products"
            ? "All Products"
            : finalCategory
        } mein add ho gaya.`,
        "success"
      );

    }
  );

}


/* =========================================================
   DELETE SEARCH
========================================================= */

if (deleteSearch) {

  deleteSearch.addEventListener(
    "input",
    function() {

      if (clearSearch) {

        clearSearch.classList.toggle(
          "show",
          this.value.trim().length > 0
        );

      }


      renderProductPreview();

    }
  );

}


/* =========================================================
   CLEAR SEARCH
========================================================= */

if (clearSearch) {

  clearSearch.addEventListener(
    "click",
    function() {

      if (deleteSearch) {

        deleteSearch.value = "";

        deleteSearch.focus();

      }


      clearSearch.classList.remove(
        "show"
      );


      renderProductPreview();

    }
  );

}


/* =========================================================
   CHECK ALL HIDDEN
========================================================= */

function areAllProductsHidden() {

  const products =
    getAllProducts();


  const hiddenIds =
    getHiddenIds();


  if (products.length === 0) {

    return false;

  }


  return products.every(
    product =>

      hiddenIds.some(
        hiddenId =>

          String(hiddenId) ===
          String(product.id)

      )

  );

}


/* =========================================================
   UPDATE SHOW / HIDE BUTTON
========================================================= */

function updateToggleButton() {

  if (!toggleAllProducts) return;


  const products =
    getAllProducts();


  if (
    products.length === 0
  ) {

    toggleAllProducts.innerHTML = `

      <i class="fas fa-eye"></i>

      Show All

    `;

    return;

  }


  const allHidden =
    areAllProductsHidden();


  if (allHidden) {

    toggleAllProducts.classList.add(
      "show-mode"
    );


    toggleAllProducts.innerHTML = `

      <i class="fas fa-eye"></i>

      Show All

    `;

  } else {

    toggleAllProducts.classList.remove(
      "show-mode"
    );


    toggleAllProducts.innerHTML = `

      <i class="fas fa-eye-slash"></i>

      Hide All

    `;

  }

}


/* =========================================================
   SHOW / HIDE ALL
========================================================= */

if (toggleAllProducts) {

  toggleAllProducts.addEventListener(
    "click",
    function() {

      const products =
        getAllProducts();


      if (products.length === 0) {

        showAdminMessage(
          "No products available.",
          "error"
        );

        return;

      }


      const hiddenIds =
        getHiddenIds();


      const allHidden =
        areAllProductsHidden();


      /*
         SHOW ALL
      */

      if (allHidden) {

        const productIds =
          products.map(
            product =>
              String(product.id)
          );


        const newHiddenIds =
          hiddenIds.filter(
            hiddenId =>

              !productIds.includes(
                String(hiddenId)
              )

          );


        saveStorageArray(
          HIDDEN_PRODUCTS_KEY,
          newHiddenIds
        );


        showAdminMessage(
          "All products are visible now.",
          "success"
        );

      }


      /*
         HIDE ALL
      */

      else {

        const allProductIds =
          products.map(
            product =>
              product.id
          );


        const combined = [

          ...hiddenIds,

          ...allProductIds

        ];


        const uniqueIds =
          combined.filter(
            (id, index, array) => {

              return (
                array.findIndex(
                  item =>
                    String(item) ===
                    String(id)
                ) === index
              );

            }
          );


        saveStorageArray(
          HIDDEN_PRODUCTS_KEY,
          uniqueIds
        );


        showAdminMessage(
          "All products hidden.",
          "success"
        );

      }


      renderProductPreview();

    }
  );

}


/* =========================================================
   DELETE PRODUCT
========================================================= */

function deleteProduct(id) {

  if (
    id === undefined ||
    id === null ||
    id === ""
  ) {

    showAdminMessage(
      "Invalid product ID.",
      "error"
    );

    return;

  }


  const productId =
    String(id);


  const defaultList =
    getDefaultProducts();

  const addedList =
    getAddedProducts();


  const allProducts = [

    ...defaultList,

    ...addedList

  ];


  const product =
    allProducts.find(
      item =>

        String(item.id) ===
        productId

    );


  if (!product) {

    showAdminMessage(
      "Product nahi mila.",
      "error"
    );

    return;

  }


  const confirmed =
    confirm(
      `"${product.name}" ko delete karna hai?`
    );


  if (!confirmed) {

    return;

  }


  /*
     DEFAULT PRODUCT
  */

  const isDefault =
    defaultList.some(
      item =>

        String(item.id) ===
        productId

    );


  if (isDefault) {

    const deletedIds =
      getDeletedIds();


    const exists =
      deletedIds.some(
        deletedId =>

          String(deletedId) ===
          productId

      );


    if (!exists) {

      deletedIds.push(
        product.id
      );

    }


    saveStorageArray(
      DELETED_PRODUCTS_KEY,
      deletedIds
    );

  }


  /*
     ADDED PRODUCT
  */

  else {

    const updated =
      addedList.filter(
        item =>

          String(item.id) !==
          productId

      );


    saveStorageArray(
      ADDED_PRODUCTS_KEY,
      updated
    );

  }


  /*
     REMOVE FROM HIDDEN
  */

  const hiddenIds =
    getHiddenIds();


  const updatedHidden =
    hiddenIds.filter(
      hiddenId =>

        String(hiddenId) !==
        productId

    );


  saveStorageArray(
    HIDDEN_PRODUCTS_KEY,
    updatedHidden
  );


  renderCategories();

  renderProductPreview();


  showAdminMessage(
    `"${product.name}" deleted successfully.`,
    "success"
  );

}


/* =========================================================
   PRODUCT PREVIEW
========================================================= */

function renderProductPreview() {

  if (!deletePreview) return;


  const products =
    getAllProducts();


  const hiddenIds =
    getHiddenIds();


  const search =
    deleteSearch
      ? deleteSearch.value
          .trim()
          .toLowerCase()
      : "";


  if (productCount) {

    productCount.textContent =
      products.length;

  }


  updateToggleButton();


  let filtered =
    products.filter(
      product => {

        if (!search) {

          return true;

        }


        const name =
          String(
            product.name || ""
          ).toLowerCase();


        const category =
          String(
            product.category || ""
          ).toLowerCase();


        return (

          name.includes(search)

          ||

          category.includes(search)

        );

      }
    );


  /*
     Preview mein sirf visible products
  */

  filtered =
    filtered.filter(
      product =>

        !hiddenIds.some(
          hiddenId =>

            String(hiddenId) ===
            String(product.id)

        )

    );


  if (filtered.length === 0) {

    deletePreview.innerHTML = `

      <div class="empty-preview">

        <i class="fas fa-box-open"></i>

        <h4>
          ${
            search
              ? "Product Not Found"
              : "No Visible Products"
          }
        </h4>

        <p>
          ${
            search
              ? "Search change karke dobara try karein."
              : "Show All button se products dikha sakte hain."
          }
        </p>

      </div>

    `;

    return;

  }


  deletePreview.innerHTML =

    filtered
      .map(
        (product, index) => {

          const sizes =
            Array.isArray(
              product.sizes
            )
              ? product.sizes.join(
                  " • "
                )
              : "";


          return `

            <div
              class="admin-product-item"
              data-product-id="${escapeHTML(product.id)}"
              style="animation-delay:${index * 0.04}s"
            >

              <div
                class="admin-product-icon"
              >

                <i class="fas fa-box"></i>

              </div>


              <div
                class="admin-product-info"
              >

                <div
                  class="admin-product-name"
                >

                  ${escapeHTML(
                    product.name
                  )}

                </div>


                <span
                  class="admin-product-category"
                >

                  ${escapeHTML(
                    product.category ||
                    "All Products"
                  )}

                </span>


                <div
                  class="admin-product-sizes"
                >

                  ${escapeHTML(
                    sizes
                  )}

                </div>

              </div>


              <div
                class="admin-product-status"
              >

                <span
                  class="status-dot"
                ></span>

                Visible

              </div>


              <button
                type="button"
                class="delete-product-btn"
                data-delete-id="${escapeHTML(product.id)}"
                title="Delete Product"
              >

                <i class="fas fa-trash"></i>

              </button>

            </div>

          `;

        }
      )
      .join("");


  /*
     DELETE EVENTS
  */

  deletePreview
    .querySelectorAll(
      ".delete-product-btn"
    )
    .forEach(button => {

      button.addEventListener(
        "click",
        function(e) {

          e.preventDefault();

          e.stopPropagation();


          const id =
            this.getAttribute(
              "data-delete-id"
            );


          deleteProduct(id);

        }
      );

    });

}


/* =========================================================
   ADMIN TOAST
========================================================= */

function showAdminMessage(
  message,
  type = "success"
) {

  const old =
    document.querySelector(
      ".admin-toast"
    );


  if (old) {

    old.remove();

  }


  const toast =
    document.createElement(
      "div"
    );


  toast.className =
    `admin-toast ${type}`;


  toast.innerHTML = `

    <div class="toast-icon">

      <i class="fas ${
        type === "success"
          ? "fa-check"
          : "fa-circle-exclamation"
      }"></i>

    </div>

    <span>
      ${escapeHTML(message)}
    </span>

  `;


  document.body.appendChild(
    toast
  );


  requestAnimationFrame(
    () => {

      toast.classList.add(
        "show"
      );

    }
  );


  setTimeout(
    () => {

      toast.classList.remove(
        "show"
      );


      setTimeout(
        () => {

          toast.remove();

        },
        300
      );

    },
    2500
  );

}


/* =========================================================
   TOAST CSS
========================================================= */

(function() {

  const style =
    document.createElement(
      "style"
    );


  style.textContent = `

    .admin-toast {

      position: fixed;

      left: 50%;

      bottom: 25px;

      z-index: 999999;

      display: flex;

      align-items: center;

      gap: 10px;

      min-width: 240px;

      max-width:
        calc(100% - 30px);

      padding: 13px 16px;

      border-radius: 14px;

      color: #fff;

      background: #171923;

      box-shadow:
        0 15px 45px
        rgba(0,0,0,.25);

      opacity: 0;

      transform:
        translate(-50%, 25px)
        scale(.95);

      transition:
        opacity .3s ease,
        transform .3s ease;

      font-size: 12px;

      font-weight: 600;

    }


    .admin-toast.show {

      opacity: 1;

      transform:
        translate(-50%, 0)
        scale(1);

    }


    .toast-icon {

      width: 30px;

      height: 30px;

      display: flex;

      align-items: center;

      justify-content: center;

      border-radius: 9px;

      background:
        rgba(255,255,255,.1);

    }


    .admin-toast.success
    .toast-icon {

      color: #22c55e;

    }


    .admin-toast.error
    .toast-icon {

      color: #ef4444;

    }


    .delete-product-btn {

      width: 38px;

      height: 38px;

      display: flex;

      align-items: center;

      justify-content: center;

      flex-shrink: 0;

      border: none;

      border-radius: 11px;

      color: #dc2626;

      background:
        rgba(220,38,38,.08);

      cursor: pointer;

      transition: .25s ease;

    }


    .delete-product-btn:hover {

      color: #fff;

      background: #dc2626;

      transform:
        translateY(-2px)
        scale(1.05);

    }


    .admin-product-item {

      animation:
        productIn .35s ease both;

    }


    @keyframes productIn {

      from {

        opacity: 0;

        transform:
          translateY(12px)
          scale(.98);

      }

      to {

        opacity: 1;

        transform:
          translateY(0)
          scale(1);

      }

    }


    .empty-preview {

      padding: 40px 20px;

      text-align: center;

    }


    .empty-preview i {

      font-size: 42px;

      opacity: .25;

      margin-bottom: 12px;

    }


    .empty-preview h4 {

      margin: 0 0 6px;

    }


    .empty-preview p {

      margin: 0;

      font-size: 11px;

      opacity: .65;

    }

  `;


  document.head.appendChild(
    style
  );

})();


/* =========================================================
   STORAGE CHANGE
========================================================= */

window.addEventListener(
  "storage",
  function(e) {

    if (

      e.key === ADDED_PRODUCTS_KEY ||

      e.key === DELETED_PRODUCTS_KEY ||

      e.key === HIDDEN_PRODUCTS_KEY ||

      e.key === CUSTOM_CATEGORIES_KEY

    ) {

      renderCategories();

      renderProductPreview();

    }

  }
);


/* =========================================================
   PAGE FOCUS
========================================================= */

window.addEventListener(
  "focus",
  function() {

    renderCategories();

    renderProductPreview();

  }
);


/* =========================================================
   INITIAL LOAD
========================================================= */

renderCategories();

updateSizeNumbers();

renderProductPreview();
// =====================================================
// DELETE CATEGORY SYSTEM
// =====================================================

(function () {

  const categoryPreview =
    document.getElementById("categoryDeletePreview");

  const categorySearch =
    document.getElementById("categoryDeleteSearch");

  const clearCategorySearch =
    document.getElementById("clearCategorySearch");

  const categoryCount =
    document.getElementById("categoryCount");

  const categoryProductCount =
    document.getElementById("categoryProductCount");


  // Agar HTML card page par nahi hai
  // to kuch bhi execute nahi hoga

  if (!categoryPreview) return;


  // ===================================================
  // DEFAULT CATEGORIES
  // ===================================================

  const defaultCategories = [
    "PVC",
    "CPVC",
    "Sanitary"
  ];


  // ===================================================
  // GET ALL CATEGORIES
  // ===================================================

  function getAdminCategories() {

    const customCategories = JSON.parse(
      localStorage.getItem("customCategories") || "[]"
    );


    const categories = [
      ...defaultCategories
    ];


    customCategories.forEach(category => {

      const exists = categories.some(
        item =>
          item.toLowerCase() ===
          category.toLowerCase()
      );


      if (!exists) {
        categories.push(category);
      }

    });


    // Products se bhi categories collect karo
    // Isse agar koi custom category product me hai
    // to wo bhi list me aa jayegi

    let addedProducts = [];

    try {

      addedProducts = JSON.parse(
        localStorage.getItem("addedProducts") || "[]"
      );

    } catch (error) {

      addedProducts = [];

    }


    addedProducts.forEach(product => {

      if (!product.category) return;


      const exists = categories.some(
        category =>
          category.toLowerCase() ===
          product.category.toLowerCase()
      );


      if (!exists) {
        categories.push(product.category);
      }

    });


    return categories;

  }


  // ===================================================
  // GET PRODUCTS
  // ===================================================

  function getAdminProducts() {

    let addedProducts = [];

    try {

      addedProducts = JSON.parse(
        localStorage.getItem("addedProducts") || "[]"
      );

    } catch (error) {

      addedProducts = [];

    }


    return addedProducts;

  }


  // ===================================================
  // COUNT PRODUCTS IN CATEGORY
  // ===================================================

  function getCategoryProductCount(category) {

    const products = getAdminProducts();


    return products.filter(product => {

      return (
        product.category &&
        product.category.toLowerCase() ===
        category.toLowerCase()
      );

    }).length;

  }


  // ===================================================
  // RENDER CATEGORIES
  // ===================================================

  function renderDeleteCategories(
    searchText = ""
  ) {

    const categories =
      getAdminCategories();


    const search =
      searchText.trim().toLowerCase();


    const filteredCategories =
      categories.filter(category => {

        return category
          .toLowerCase()
          .includes(search);

      });


    // CATEGORY COUNT

    if (categoryCount) {

      categoryCount.textContent =
        categories.length;

    }


    if (categoryProductCount) {

      categoryProductCount.textContent =
        `${filteredCategories.length} Categories`;

    }


    // EMPTY

    if (filteredCategories.length === 0) {

      categoryPreview.innerHTML = `

        <div class="category-empty">

          <i class="fas fa-folder-open"></i>

          <strong>
            Category nahi mili
          </strong>

          <span>
            Search ko change karke dobara try karein.
          </span>

        </div>

      `;

      return;

    }


    // RENDER

    categoryPreview.innerHTML =
      filteredCategories.map(category => {

        const productCount =
          getCategoryProductCount(category);


        return `

          <div
            class="admin-category-item"
            data-category="${escapeCategory(category)}"
          >

            <div class="category-item-info">

              <div class="category-item-icon">

                <i class="fas fa-folder"></i>

              </div>


              <div class="category-item-text">

                <div class="category-item-name">

                  ${escapeCategory(category)}

                </div>


                <div class="category-item-products">

                  ${productCount}
                  ${productCount === 1 ? "Product" : "Products"}

                </div>

              </div>

            </div>


            <button
              type="button"
              class="delete-category-btn"
              data-category="${escapeCategory(category)}"
            >

              <i class="fas fa-trash"></i>

              <span>
                Delete
              </span>

            </button>

          </div>

        `;

      }).join("");


    // DELETE BUTTON EVENTS

    categoryPreview
      .querySelectorAll(".delete-category-btn")
      .forEach(button => {

        button.addEventListener(
          "click",
          function () {

            const category =
              this.dataset.category;

            deleteCategory(category);

          }
        );

      });

  }


  // ===================================================
  // SAFE HTML TEXT
  // ===================================================

  function escapeCategory(text) {

    return String(text)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");

  }


  // ===================================================
  // DELETE CATEGORY
  // ===================================================

  function deleteCategory(category) {

    const productCount =
      getCategoryProductCount(category);


    const warningMessage =
      productCount > 0

        ? `${category} category me ${productCount} product hai.\n\nCategory delete karne par is category ke sabhi products bhi delete ho jayenge.\n\nKya aap continue karna chahte hain?`

        : `${category} category me koi product nahi hai.\n\nKya aap ye category delete karna chahte hain?`;


    const confirmed =
      confirm(warningMessage);


    if (!confirmed) {
      return;
    }


    // =================================================
    // 1. DELETE PRODUCTS OF THIS CATEGORY
    // =================================================

    let addedProducts = [];


    try {

      addedProducts = JSON.parse(
        localStorage.getItem("addedProducts") || "[]"
      );

    } catch (error) {

      addedProducts = [];

    }


    const categoryProducts =
      addedProducts.filter(product => {

        return (
          product.category &&
          product.category.toLowerCase() ===
          category.toLowerCase()
        );

      });


    const remainingProducts =
      addedProducts.filter(product => {

        return !(
          product.category &&
          product.category.toLowerCase() ===
          category.toLowerCase()
        );

      });


    // =================================================
    // 2. SAVE REMAINING PRODUCTS
    // =================================================

    localStorage.setItem(
      "addedProducts",
      JSON.stringify(remainingProducts)
    );


    // =================================================
    // 3. DELETED PRODUCT IDS
    // =================================================

    let deletedIds = [];


    try {

      deletedIds = JSON.parse(
        localStorage.getItem("deletedProducts") || "[]"
      );

    } catch (error) {

      deletedIds = [];

    }


    categoryProducts.forEach(product => {

      if (
        product.id !== undefined &&
        !deletedIds.includes(product.id)
      ) {

        deletedIds.push(product.id);

      }

    });


    localStorage.setItem(
      "deletedProducts",
      JSON.stringify(deletedIds)
    );


    // =================================================
    // 4. REMOVE FROM CUSTOM CATEGORIES
    // =================================================

    let customCategories = [];


    try {

      customCategories = JSON.parse(
        localStorage.getItem("customCategories") || "[]"
      );

    } catch (error) {

      customCategories = [];

    }


    customCategories =
      customCategories.filter(item => {

        return (
          item.toLowerCase() !==
          category.toLowerCase()
        );

      });


    localStorage.setItem(
      "customCategories",
      JSON.stringify(customCategories)
    );


    // =================================================
    // 5. REFRESH CATEGORY LIST
    // =================================================

    renderDeleteCategories(
      categorySearch
        ? categorySearch.value
        : ""
    );


    // =================================================
    // 6. REFRESH EXISTING PRODUCT SYSTEM
    // =================================================

    if (typeof renderProducts === "function") {

      try {
        renderProducts();
      } catch (error) {
        console.log("Product render refresh skipped.");
      }

    }


    // =================================================
    // 7. SUCCESS MESSAGE
    // =================================================

    alert(
      `Category "${category}" successfully deleted.\n\n${categoryProducts.length} product(s) bhi delete ho gaye.`
    );

  }


  // ===================================================
  // SEARCH
  // ===================================================

  if (categorySearch) {

    categorySearch.addEventListener(
      "input",
      function () {

        renderDeleteCategories(
          this.value
        );

      }
    );

  }


  // ===================================================
  // CLEAR SEARCH
  // ===================================================

  if (clearCategorySearch) {

    clearCategorySearch.addEventListener(
      "click",
      function () {

        if (categorySearch) {

          categorySearch.value = "";

          categorySearch.focus();

        }


        renderDeleteCategories("");

      }
    );

  }


  // ===================================================
  // STORAGE CHANGE
  // ===================================================

  window.addEventListener(
    "storage",
    function (event) {

      if (
        event.key === "addedProducts" ||
        event.key === "deletedProducts" ||
        event.key === "customCategories"
      ) {

        renderDeleteCategories(
          categorySearch
            ? categorySearch.value
            : ""
        );

      }

    }
  );


  // ===================================================
  // INITIAL LOAD
  // ===================================================

  renderDeleteCategories("");

})();