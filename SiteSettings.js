

const DEFAULT_SITE_SETTINGS = {

shopName: "Arjun Plumbing Mart",

mobileNumber: "9005009036",

tagline: "हर फिटिंग सही रेट पर, सीधा ऑर्डर",

logo: "logo.png",

primaryColor: "#8b1238",

secondaryColor: "#d8b26a"

};

/* ==========================================
GET SAVED SETTINGS
========================================== */

function getSiteSettings(){

const saved =
localStorage.getItem(
"arjunPlumbingSettings"
);

if(!saved){

return {
  ...DEFAULT_SITE_SETTINGS
};

}

try{

const parsed =
  JSON.parse(saved);


return {

  ...DEFAULT_SITE_SETTINGS,

  ...parsed

};

}catch(error){

console.error(
  "Settings load error:",
  error
);


return {
  ...DEFAULT_SITE_SETTINGS
};

}

}

/* ==========================================
SAVE SETTINGS
========================================== */

function saveSiteSettings(newSettings){

const currentSettings =
getSiteSettings();

const updatedSettings = {

...currentSettings,

...newSettings

};

localStorage.setItem(

"arjunPlumbingSettings",

JSON.stringify(
  updatedSettings
)

);

return updatedSettings;

}

/* ==========================================
APPLY SETTINGS TO WEBSITE
========================================== */

function applySiteSettings(){

const settings =
getSiteSettings();

/* ========================================
THEME COLORS
======================================== */

document.documentElement.style
.setProperty(
"--primary",
settings.primaryColor
);

document.documentElement.style
.setProperty(
"--secondary",
settings.secondaryColor
);

/* Extra theme variables */

document.documentElement.style
.setProperty(
"--theme-primary",
settings.primaryColor
);

document.documentElement.style
.setProperty(
"--theme-secondary",
settings.secondaryColor
);

/* ========================================
SHOP NAME
======================================== */

document
.querySelectorAll(
"[data-shop-name]"
)
.forEach(function(element){

  element.textContent =
    settings.shopName;

});

/* ========================================
TAGLINE
======================================== */

document
.querySelectorAll(
"[data-tagline]"
)
.forEach(function(element){

  element.textContent =
    settings.tagline;

});

/* ========================================
MOBILE NUMBER
======================================== */

document
.querySelectorAll(
"[data-mobile]"
)
.forEach(function(element){

  element.textContent =
    settings.mobileNumber;

});

/* ========================================
CALL LINKS
======================================== */

document
.querySelectorAll(
"[data-call-link]"
)
.forEach(function(element){

  element.href =
    "tel:" +
    settings.mobileNumber;

});

/* ========================================
WHATSAPP LINKS
======================================== */

document
.querySelectorAll(
"[data-whatsapp]"
)
.forEach(function(element){

  element.href =
    "https://wa.me/91" +
    settings.mobileNumber;

});

/* ========================================
LOGO
======================================== */

document
.querySelectorAll(
"[data-logo]"
)
.forEach(function(element){

  element.src =
    settings.logo;

});

/* ========================================
LOGO ALT TEXT
======================================== */

document
.querySelectorAll(
"[data-logo]"
)
.forEach(function(element){

  element.alt =
    settings.shopName;

});

/* ========================================
PAGE TITLE
======================================== */

document.title =
settings.shopName;

/* ========================================
BODY THEME ATTRIBUTE
======================================== */

document.body
.setAttribute(
"data-theme-primary",
settings.primaryColor
);

document.body
.setAttribute(
"data-theme-secondary",
settings.secondaryColor
);

}

/* ==========================================
RESET SETTINGS
========================================== */

function resetSiteSettings(){

const defaultSettings = {

...DEFAULT_SITE_SETTINGS

};

localStorage.setItem(

"arjunPlumbingSettings",

JSON.stringify(
  defaultSettings
)

);

applySiteSettings();

return defaultSettings;

}

/* ==========================================
CHECK MOBILE NUMBER
========================================== */

function getWhatsAppNumber(){

const settings =
getSiteSettings();

return (
"91" +
settings.mobileNumber
);

}

/* ==========================================
APPLY THEME ONLY
========================================== */

function applySiteTheme(){

const settings =
getSiteSettings();

document.documentElement.style
.setProperty(
"--primary",
settings.primaryColor
);

document.documentElement.style
.setProperty(
"--secondary",
settings.secondaryColor
);

document.documentElement.style
.setProperty(
"--theme-primary",
settings.primaryColor
);

document.documentElement.style
.setProperty(
"--theme-secondary",
settings.secondaryColor
);

}

/* ==========================================
AUTO APPLY ON PAGE LOAD
========================================== */

document.addEventListener(
"DOMContentLoaded",
function(){

applySiteSettings();

}
);