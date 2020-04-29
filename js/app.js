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
const section = document.querySelectorAll("section");
let arr = [];
section.forEach(element => {
  const value = element.id;
  arr.push(value);
});
console.log(arr);
const newElement = document.createElement("li");
const link = document.createElement("a");
// TODO: add a loop for nav
link.setAttribute("href", "#" + arr[0]);
link.textContent = "section";
newElement.appendChild(link);

/**
 * End Global Variables
 * Start Helper Functions
 *
 */

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav
const li = () => {
  mainNavUl.appendChild(newElement);
};
mainNavUl.appendChild(newElement);

// Add class 'active' to section when near top of viewport

// Scroll to anchor ID using scrollTO event

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu

// Scroll to section on link click

// Set sections as active
