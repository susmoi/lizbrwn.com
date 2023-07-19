/////// JAVASCRIPT ///////
// Modules
// from { promptLibrary } import { saved-prompts }


// Screen saver //
    // resetTimer - Listens for the document's content to load
    document.addEventListener('DOMContentLoaded', (event) => {

    //create the timer variable
    let timer;

    //create the function that resets the timer
    function resetTimer() {

      // clear the time
      clearTimeout(timer);

      // set the new timer
      timer = setTimeout(() => {
        document.getElementById('dia-container').classList.add('screenSaverActive');
        document.getElementById('dia-container').style.display ='none';
        document.getElementById('wammyLogo').style.display = 'block'; document.getElementById('wammyLogo').style.opacity = '100%';
        console.log('function ran');
      }, 600000);
    }

    // Listens for mouse movement
    document.addEventListener('mousemove', (e) => {
      console.log('mousemove');
      document.getElementById('dia-container').style.display ='block';
      document.getElementById('wammyLogo').style.opacity = '0%';
      resetTimer();
    });

    // Listens for key presses
    document.addEventListener('keydown', (e) => {
      console.log('keydown');
      document.getElementById('dia-container').style.display ='block';
      document.getElementById('wammyLogo').style.opacity = '0%';
      resetTimer();
    });

    resetTimer();
  });


// Start up function //
    // onload - Sends prompt to server then adds the response to the bot's frontend.
    // when the window loads, add an event listener to the form
    // that calls the handleSubmitQuestion function when the form is submitted
    window.onload = () => {
      activateCommands();
      document.getElementById('prompt-form').addEventListener('submit', (e) => {
          // prevent the form from refreshing the page
          e.preventDefault();

          // get the value of the input
          const question = document.getElementById('prompt-test-area').value;

          // call the function that handles the fetch request to the server
          handleSubmitQuestion(question).then((data) => {
              // add the chatbot's response to the DOM when the fetch request is complete
              addBotResponseToDialogueBox(data);
          });
      });

      document.getElementById('prompt-form').addEventListener('keydown', (e) => {
        if (e.keyCode === 13) {
           //prevent the form from refreshing the page
          e.preventDefault();

           //get the value of the input
          const question = document.getElementById('prompt-text-area').value;

           //call the function that handles the fetch request to our backend
          handleSubmitQuestion(question).then((data) => {
              // add the chatbot's response to the DOM when the fetch request is complete
              addBotResponseToDialogueBox(data);
          });
        }
      });
    };


// Auto scroll dialogue container //
    // automatically scroll to the bottom of the dialogue container
    function scrollToBottom() {
      const container = document.getElementById('dia-container');
      container.scrollTop = container.scrollHeight;
    }


// Prompt bar expands //
    // Get the prompt input element and resize it's height as the content grows
    var textarea = document.getElementById('prompt-text-area');
    textarea.addEventListener('input', autoResize, false);
    function autoResize() {
      this.style.height = '30px';
      this.style.height = this.scrollHeight + 'px';
    }


// Commands //
    function activateCommands() {

      var input = document.getElementById('prompt-text-area');

      // listens for to the prompt input for '/'
      input.addEventListener("keydown", (e) => {
        // NEEDS: to only run the 'if statment' when the prompt-input value equals '/'
        if (e.keyCode === 191 && input.value.length === 0) {

            // select the prompt library
            const promptLibrary = document.getElementById('prompt-library-container');

            // displays prompt library
            promptLibrary.classList.add('open');
            promptLibrary.style.display = "grid";

            // waits and listens for the user to select a command by focusing, clicking or typing the command
            document.addEventListener("keydown" , (e) => {
              if (e.keyCode === 9) {
                console.log("you used the tab key!!")
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

// User question //
    // add the user's question to the dialogue box
    function addUserQuestionToDialogueBox(question) {
        // create a new li element
        const userQuestion = document.createElement('li');

        // add user-specific styling to element
        userQuestion.classList.add('user-prompt');

        // add the user's question to the element
        userQuestion.innerText = question;

        // add the li element to the DOM
        document.getElementById('dialogue').appendChild(userQuestion);

        // scrolls to the bottom of the dialogue container
        scrollToBottom();

        // clear the input for the next question
        document.getElementById('prompt-text-area').value = '';

        // focus the input box
        document.getElementById('prompt-text-area').focus();

    }


// Bot response //
    // add the chatbot's response to the dialogue box
    function addBotResponseToDialogueBox(data) {
        // create a new li element
        const botResponse = document.createElement('li');

        // add user-specific styling to list element
        botResponse.classList.add('wammy-response');

        // add the bot's response to the list element
        botResponse.innerText = data;

        // add the list element to the DOM
        document.getElementById('dialogue').appendChild(botResponse);

        // scrolls to the bottom of the dialogue container
        scrollToBottom();

        // clear the input for the next response
        document.getElementById('prompt-text-area').value = '';

        // focus the input box
        document.getElementById('prompt-text-area').focus();
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
