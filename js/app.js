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
const divSections = document.getElementsByClassName("landing__container");

// Create links
function createLinks(names) {
  const link = document.createElement("a");
  link.href = `#${names.id}`;
  link.textContent = names.dataset.nav;
  link.classList = `menu__link`;
  mainNavLi.appendChild(link);
}

// add child to parent
function addChild(parent, child) {
  parent.appendChild(child);
}

// Build menu
window.addEventListener("load", function() {
  for (let i = 0; i < sections.length; i++) {
    createLinks(sections[i]);
  }
  addChild(mainNavUl, mainNavLi);
});

// helper function for check if section is in scroll view
// https://gomakethings.com/how-to-test-if-an-element-is-in-the-viewport-with-vanilla-javascript/
let bounding = element => {
  let rect = element.getBoundingClientRect();
  return rect.top <= 500 && rect.bottom >= 140;
};

/*
 * Addeds a blue background to link when in view of section.
 * Add class 'active' to section when near top of viewport
 */
document.addEventListener("scroll", function() {
  const highLight = document.getElementsByTagName("a");
  const meadiaMatch = window.matchMedia("(max-width: 400px)");
  for (let i = 0; i < highLight.length; i++) {
    if (bounding(sections[i])) {
      highLight[i].classList.add("active");
    } else {
      highLight[i].classList.remove("active");
    }
  }
});

// Scroll to section on link click
document.addEventListener("click", function() {
  smoothScroll(event);
});

// helper function for smooth scroll
function smoothScroll(event) {
  // prevent the default action
  event.preventDefault();
  const targetId = event.target.getAttribute("href");
  document.querySelector(targetId).scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
}
