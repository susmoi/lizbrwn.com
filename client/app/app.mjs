/////// JAVASCRIPT ///////
// Modules
// from { promptLibrary } import { saved-prompts }

/// CONSTANTS
const dialogueBox = document.getElementById('dia-container');
const form = document.getElementById('prompt-form');
const input = document.getElementById('prompt-input');
const button = document.getElementById('prompt-button');
const promptLibrary = document.getElementById('prompt-library-container');
const message = document.getElementsByTagName("li");
const wammyLogo = document.getElementById('wammyLogo');

const userQuestion = document.createElement('li');
const botResponse = document.createElement('li');

// Screen saver //
    // Listens for the document's content to load
    document.addEventListener('DOMContentLoaded', (event) => {

    let timer;

    function resetTimer() {

      // clear the time
      clearTimeout(timer);

      // set the new timer
      timer = setTimeout(() => {
        dialogueBox.classList.add('screenSaverActive');
        dialogueBox.style.display ='none';
        wammyLogo.style.display = 'block';
        wammyLogo.style.opacity = '100%';
      }, 600000);
    }

    // Listens for mouse movement
    document.addEventListener('mousemove', (e) => {
      dialogueBox.style.display ='block';
      wammyLogo.style.opacity = '0%';
      resetTimer();
    });

    // Listens for key presses
    document.addEventListener('keydown', (e) => {
      dialogueBox.style.display ='block';
      wammyLogo.style.opacity = '0%';
      resetTimer();
    });

    resetTimer();
  });

// Auto scroll dialogue container //
    // automatically scroll to the bottom of the dialogue container
    function scrollToBottom() {

      dialogueBox.scrollTop = dialogueBox.scrollHeight;
    }


// Auto prompt bar //

    function autoResize() {
      this.style.height = '28';
      this.style.height = this.scrollHeight + 'px';
      button.style.height = input.scrollHeight + 'px';
      form.addEventListener('submit', resetSize);
    }

    function resetSize() {
      input.style.height = '28px';
      button.style.height = '28px';
    }

    // Get the prompt input element and resize it's height as the content grows
    input.addEventListener('input', autoResize, false);





// Commands //
    function activateCommands() {



      // listens for to the prompt input for '/'
      input.addEventListener("keydown", (e) => {
        // NEEDS: to only run the 'if statment' when the prompt-input value equals '/'
        if (e.keyCode === 191 && input.value.length === 0) {

            // select the prompt library


            // displays prompt library
            promptLibrary.classList.add('open');
            promptLibrary.style.display = "grid";

            // waits and listens for the user to select a command by focusing, clicking or typing the command
            document.addEventListener("keydown" , (e) => {
              if (e.keyCode === 9) {
              }
            });

            // updates the value of the prompt input with the value of the item selected from the prompt library

            // closes the prompt library and clears the prompt text area
            input.addEventListener("keydown", (e) => {
              if (e.keyCode === 27) {
                promptLibrary.style.display = 'none';
                input.value = '';
              }
            });
        }
      });
    }



// Quick Copy //
    function copyMessage() {


      message.addEventListener('click', (e) => {
        // if (document.getElementById('prompt-input').value ==='') {
        //   document.getElementById('prompt-input').value = userMessage.textContent;
        // }
      });
    }

// User question //
    // add the user's question to the dialogue box
    function addUserQuestionToDialogueBox(question) {
        // create a new li element


        // add user-specific styling to element
        userQuestion.classList.add('user-prompt');

        // add the user's question to the element
        userQuestion.innerText = question;

        // add the li element to the DOM
        document.getElementById('dialogue').appendChild(userQuestion);

        // scrolls to the bottom of the dialogue container
        scrollToBottom();

        // clear the input for the next question
        input.value = '';

        // focus the input box
        input.focus();

    }


// Bot response //
    // add the chatbot's response to the dialogue box
    function addBotResponseToDialogueBox(data) {
        // create a new li element


        // add user-specific styling to list element
        botResponse.classList.add('wammy-response');

        // add the bot's response to the list element
        botResponse.innerText = data;

        // add the list element to the DOM
        document.getElementById('dialogue').appendChild(botResponse);

        // scrolls to the bottom of the dialogue container
        scrollToBottom();

        // clear the input for the next response
        input.value = '';

        // focus the input box
        input.focus();
    }


// Server connection //
    // handle when the user submits a question through the form
    async function handleSubmitQuestion(question) {
      // input validation
      if (!question) {
          return alert('Please enter your support question');
      }

      // add the user's question to the DOM
      addUserQuestionToDialogueBox(question);

      // logs the response of a fetch request to the openai completions api.
      const response = await fetch('/api/openai', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          },
        body: JSON.stringify({ question }),
      });

      // parse the response as json
      const { content } = await response.json();
      return content;
    }

// Start up function //
    // onload - Sends prompt to server then adds the response to the bot's frontend.
    // when the window loads, add an event listener to the form
    // that calls the handleSubmitQuestion function when the form is submitted
    window.onload = () => {

      //allows commands to run
      activateCommands();

      form.addEventListener('submit', (e) => {
          // prevent the form from refreshing the page
          e.preventDefault();

          // get the value of the input
          const question = input.value;

          // call the function that handles the fetch request to the server
          handleSubmitQuestion(question).then((data) => {
              // add the chatbot's response to the DOM when the fetch request is complete
              addBotResponseToDialogueBox(data);
              copyMessage();
          });
      });

      form.addEventListener('keydown', (e) => {
        if (e.keyCode === 13) {
           //prevent the form from refreshing the page
          e.preventDefault();

           //get the value of the input
          const question = input.value;

           //call the function that handles the fetch request to the server
          handleSubmitQuestion(question).then((data) => {
              // add the chatbot's response to the DOM when the fetch request is complete
              addBotResponseToDialogueBox(data);
              copyMessage();
          });
        }
      });
    };
