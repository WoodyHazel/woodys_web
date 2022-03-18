// Page Loader
const pageLoader = document.querySelector(".page-loader");

function loaderTimer() {
  setTimeout(() => {
    pageLoader.style.opacity = 0;
    setTimeout(() => {
      pageLoader.style.display = "none";
    }, 2000);
  }, 500);
}

window.addEventListener("scroll", loaderTimer);

// Header
const mainHeader = document.querySelector(".main-header");
const menuBtn = document.querySelector(".menu-btn");
const mainNav = document.querySelector(".main-nav");
const mainNavLinks = document.querySelectorAll(".link-main-nav");
const emailBtn = document.querySelector(".email-btn");

menuBtn.addEventListener("click", () => {
  mainNav.classList.toggle("scale-zero");
});

emailBtn.addEventListener("click", () => {
  if (!mainNav.classList.contains("scale-zero")) {
    mainNav.classList.toggle("scale-zero");
  }
  expandedSectionReset();
  pageReset();
  pageBtnReset();
  appsPageReset();
  contactSection.classList.toggle("hidden");
  mainHeader.classList.add("header-alt");
});

mainNavLinks.forEach((item) => {
  item.addEventListener("click", (e) => {
    mainNav.classList.toggle("scale-zero");
    mainHeader.classList.add("header-alt");
    expandedSectionReset();
    pageReset();
    pageBtnReset();
    appsPageReset();
    const clicked = e.target.innerHTML;
    switch (clicked) {
      case "About":
        aboutSection.classList.toggle("hidden");
        break;
      case "Contact":
        contactSection.classList.toggle("hidden");
        break;
      case "Projects":
        projectsSection.classList.toggle("hidden");
        break;
      case "Skills":
        skillsSection.classList.toggle("hidden");
        break;
      case "Photos":
        photosSection.classList.toggle("hidden");
        break;
      case "Music":
        musicSection.classList.toggle("hidden");
        break;
      case "Settings":
        settingsSection.classList.toggle("hidden");
        break;
    }
  });
});
const expandedSections = document.querySelectorAll(
  ".default-page .section-container"
);
function expandedSectionReset() {
  expandedSections.forEach((item) => {
    if (!item.classList.contains("hidden")) {
      item.classList.add("hidden");
    }
  });
}

// Page Selector
const defaultPage = document.querySelector(".default-page");
const defaultPageBtn = document.querySelector(".default-page-btn");
const widgetsPage = document.querySelector(".widgets-page");
const widgetsPageBtn = document.querySelector(".widgets-page-btn");
const appsPage = document.querySelector(".apps-page");
const appsPageBtn = document.querySelector(".apps-page-btn");
let currentPage = defaultPageBtn;

defaultPageBtn.addEventListener("click", (e) => {
  pageReset();
  pageBtnReset();
  currentPage = e.target;
});
widgetsPageBtn.addEventListener("click", (e) => {
  if (currentPage.classList.contains("default-page-btn")) {
    slidePageRight();
    defaultPageBtn.classList.remove("active");
    widgetsPageBtn.classList.add("active");
  }
  if (currentPage.classList.contains("apps-page-btn")) {
    slidePageRight();
    slidePageRight();
    appsPageBtn.classList.remove("active");
    widgetsPageBtn.classList.add("active");
  }
  currentPage = e.target;
});
appsPageBtn.addEventListener("click", (e) => {
  if (currentPage.classList.contains("default-page-btn")) {
    slidePageLeft();
    defaultPageBtn.classList.remove("active");
    appsPageBtn.classList.add("active");
  }
  if (currentPage.classList.contains("widgets-page-btn")) {
    slidePageLeft();
    slidePageLeft();
    widgetsPageBtn.classList.remove("active");
    appsPageBtn.classList.add("active");
  }
  currentPage = e.target;
});

const slidePageRight = () => {
  widgetsPage.style.transform = "translateX(0)";
  defaultPage.style.transform = "translateX(100%)";
  appsPage.style.transform = "translateX(200%)";
};
const slidePageLeft = () => {
  widgetsPage.style.transform = "translateX(-200%)";
  defaultPage.style.transform = "translateX(-100%)";
  appsPage.style.transform = "translateX(0)";
};
const pageReset = () => {
  appsPage.style.transform = "translateX(100%)";
  widgetsPage.style.transform = "translateX(-100%)";
  defaultPage.style.transform = "translateX(0)";
};
const pageBtnReset = () => {
  if (appsPageBtn.classList.contains("active")) {
    appsPageBtn.classList.remove("active");
    defaultPageBtn.classList.add("active");
  }
  if (widgetsPageBtn.classList.contains("active")) {
    widgetsPageBtn.classList.remove("active");
    defaultPageBtn.classList.add("active");
  }
  currentPage = defaultPageBtn;
};

// Footer
const projectsFooterBtn = document.querySelector(".footer-projects");
const aboutFooterBtn = document.querySelector(".footer-about");
const contactFooterBtn = document.querySelector(".footer-contact");

projectsFooterBtn.addEventListener("click", () => {
  if (currentPage !== defaultPageBtn) {
    pageReset();
    pageBtnReset();
    currentPage = defaultPageBtn;
  }
  projectsSection.classList.toggle("hidden");
  mainHeader.classList.toggle("header-alt");
});

aboutFooterBtn.addEventListener("click", () => {
  if (currentPage !== defaultPageBtn) {
    pageReset();
    pageBtnReset();
    currentPage = defaultPageBtn;
  }
  aboutSection.classList.toggle("hidden");
  mainHeader.classList.toggle("header-alt");
});

contactFooterBtn.addEventListener("click", () => {
  if (currentPage !== defaultPageBtn) {
    pageReset();
    pageBtnReset();
    currentPage = defaultPageBtn;
  }
  contactSection.classList.toggle("hidden");
  mainHeader.classList.toggle("header-alt");
});
