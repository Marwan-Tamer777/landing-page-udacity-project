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

const sections = document.querySelectorAll('.section');
const nav = document.querySelector('#navbar__list');

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

/** build the nav
* a list item will be created for each section in the page and a click even addEventListener
* will be added to the list item before being added to the nav menu
*/
sections.forEach(function (sec) {
  const li = document.createElement('li');
  li.classList.add('list');
  li.textContent = sec.getAttribute('data-nav');
  li.addEventListener('click', scroll);
  sec.addEventListener('mouseover', highlight);
  nav.appendChild(li);
})

const links = document.querySelectorAll('.list');
// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu

// Scroll to section on link click
function scroll (eve){
  const toScroll = eve.target.textContent;

//reassigns the active class to the appropriate link
  links.forEach(function (link) {
    link.classList.remove('your-active-link');

    if(link.textContent === eve.target.textContent){
      link.classList.toggle('your-active-link');
    }
  })

//reassigns the active class to the appropriate section
  sections.forEach(function (sec) {
    sec.classList.remove('your-active-class');

    if(sec.getAttribute('data-nav') === eve.target.textContent){
      sec.classList.toggle('your-active-class');
    }

//scrolls the view to the approperiate section
    if(sec.getAttribute('data-nav') === toScroll){
      sec.scrollIntoView({ behavior: 'smooth'});
    }
  })
}

// Set sections as active
function highlight (eve){

//reassigns the active class to the appropriate section
  sections.forEach(function (sec){
    sec.classList.remove('your-active-class');
  })
  eve.target.closest('.section').classList.toggle('your-active-class');

//reassigns the active class to the appropriate link
  links.forEach(function (link) {
    link.classList.remove('your-active-link');

    if(link.textContent === eve.target.closest('.section').getAttribute('data-nav')){
      link.classList.toggle('your-active-link');
    }
  })
}
