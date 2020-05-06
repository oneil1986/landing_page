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
 * Define Global Variables
 *
 */

const mainNavUl = document.getElementById("navbar__list");
const mainNavLi = document.createElement("li");
const sections = document.getElementsByTagName("section");

let sectionId = [];

// add child to parent
function addChild(parent, child) {
  parent.appendChild(child);
}

// Build menu
/*
 * This function check to see if there is a new section then add it to the page.
 */
window.addEventListener("load", function() {
  for (let i = 0; i < sections.length; i++) {
    const link = document.createElement("a");
    link.href = `#${sections[i].id}`;
    link.textContent = sections[i].dataset.nav;
    link.classList = `menu__link`;
    mainNavLi.appendChild(link);
  }
  addChild(mainNavUl, mainNavLi);
});

// Add class 'active' to section when near top of viewport

document.addEventListener("scroll", function() {
  //   console.log(window.innerHeight);
  for (let i = 0; i < sections.length; i++) {
    if (sections[i].getBoundingClientRect().top < window.innerHeight) {
    }
  }
});

// Scroll to anchor ID using scrollTO event

/**
 * End Main Functions
 * Begin Events
 *
 */

// Scroll to section on link click
window.addEventListener("click", function() {
  smoothScroll(event);
});

function smoothScroll(event) {
  // prevent the default action
  event.preventDefault();
  const targetId = event.target.getAttribute("href");
  document.querySelector(targetId).scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
}
