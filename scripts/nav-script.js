// Places nav on desktop and mobile

//$(document).ready(function() {
//  console.log("Document ready");

//    $(function()
//    {
//      $('#nav').load('cc-nav.html', function(){

        // Get the current URL of the page
//        const currentUrl = window.location.href;

        // Get all the navigation links
//        const navLinks = document.querySelectorAll('.nav-element');

        // Loop through each link and check if its href attribute matches the current URL
//        navLinks.forEach(link => {
//          if (link.href === currentUrl) {
//            link.classList.add('active');
//          } else {
//            link.classList.remove('active');
//          }
//        });

//        if (navLinks.length > 0) {
//          console.log(`Successfully found ${navLinks.length} element(s) with class 'nav-/element'`);
      //  } else {
    //      console.log(`NOT FOUND! 'nav-element'`);
  //      }
//      });
//  });

// END of functions
//  console.log("End of document ready function");
//


// JavaScript
// import files/resources JSON files

$(document).ready(function() {
  console.log("Document ready");

  $(function() {
    // Check if screen matches media query on page load
    if (window.matchMedia("(max-width: 768px) and (-webkit-device-pixel-ratio: 2), (max-width: 768px) and (resolution: 3dppx)").matches) {
      $('#nav-mobile').load('cc-nav.html', function() {
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

        if (navLinks.length > 0) {
          console.log(`Successfully found ${navLinks.length} element(s) with class 'nav-element'`);
        } else {
          console.log(`NOT FOUND! 'nav-element'`);
        }
      });
    }

    $('#nav').load('cc-nav.html', function() {
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

      if (navLinks.length > 0) {
        console.log(`Successfully found ${navLinks.length} element(s) with class 'nav-element'`);
      } else {
        console.log(`NOT FOUND! 'nav-element'`);
      }
    });
  });


  // END of functions
  console.log("End of document ready function");
});
