/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
 */

/**
 * Define Global Variables
 *
 */
//save all elements with class name section to array
const sections = document.querySelectorAll("section");
const arrOfSections = Array.from(sections);
const navbarSections = document.getElementById("navbar__list");
/**
 * End Global Variables
 * Start Helper Functions
 *
 */
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav
function createNavbarSections() {
  arrOfSections.map((element) => {
    let listOfSections = document.createElement("li");
    listOfSections.innerHTML = `<a href="#${
      element.id
    }" class="menu__link">${element.getAttribute("data-nav")}</a>`;
    navbarSections.appendChild(listOfSections);
  });
}
createNavbarSections();

// Set sections as active
function addActiveClassToSections() {
  for (sec of sections) {
    if (isInViewport(sec) === true) {
      sec.classList.add("active");
      sec.style.cssText = "background-color:rgb(0,0,0,0.5)";
    } else {
      sec.classList.remove("active");
      sec.style.cssText =
        "background-color:linear-gradient(0deg, rgba(255,255,255,.1) 0%, rgba(255,255,255,.2) 100%) ";
    }
  }
}

/**
 * End Main Functions
 * Begin Events
 *
 */
window.addEventListener("scroll", function () {
  addActiveClassToSections();
});

// Scroll to section on link click
document.querySelectorAll("a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});
