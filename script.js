// JavaScript

// Get the current URL of the page
const currentUrl = window.location.href;

// Get all the navigation links
const navLinks = document.querySelectorAll('.nav-element');

// Loop through each link and check if its href attribute matches the current URL
navLinks.forEach(link => {
  if (link.href === currentUrl) {
    link.classList.add('active');
  } else {
    link.classList.remove('active');
  }
});
