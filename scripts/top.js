// JavaScript
// Listen for keystrokes, opens html

$(document).ready(function() {
  console.log("TOP: Document ready");

  // Include any best practices, like tests
  function isValidURL(string) {
    try {
      new URL(string);
      return true;
    } catch (_) {
      return false;
    }
  }

  // Listen for this key sequence
  function listenForKeySequence() {
    let commandPressed = false;

    $(document).keydown(function(event) {
      // Check for "command" key (91: left command, 93: right command on macOS, 17: control on Windows)
      if (event.which === 224 || event.which === 17) {
        commandPressed = true;
      }

      // Check for "z" key (90: z)
      if (event.which === 90 && commandPressed) {
        console.log('Command + Z keys pressed');
        openTopHtml();
      }
    });

    $(document).keyup(function(event) {
      if (event.which === 91 || event.which === 93 || event.which === 17) {
        commandPressed = false;
      }
    });
  }

  // Open top.html
  function openTopHtml() {
    const url = 'https://lizbrwn.com/top';
    if (isValidURL(url)) {
      window.open(url, '_self');
    } else {
      console.error('Invalid URL:', url);
    }
  }

  // Initialize the key sequence listener
  listenForKeySequence();

  // END of functions
  console.log("TOP: End of document ready function");
});
