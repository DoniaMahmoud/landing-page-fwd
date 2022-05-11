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
// Add class 'active' to section when near top of viewport
function addActiveClassToSections() {
  for (sec of sections) {
    if (isInViewport(sec) === true) {
      sec.classList.add("active");
    } else {
      sec.classList.remove("active");
    }
  }
}

// Scroll to anchor ID using scrollTO event

/**
 * End Main Functions
 * Begin Events
 *
 */
window.addEventListener("scroll", function () {
  addActiveClassToSections();
});
// navbarSections.addEventListener("click", function () {
//   var elmntToView = document.getElementById("section");
//   elmntToView.scrollIntoView();
// });
// Build menu

// Scroll to section on link click

// Set sections as active

createNavbarSections();
