
// when the window loads, add an event listener to the form
// that calls the handleSubmitQuestion function when the form is submitted
window.onload = () => {
  // focus the input box
  document.getElementById('prompt-input').focus()
  document.getElementById('prompt-form').addEventListener('submit', (e) => {
      // prevent the form from refreshing the page
      e.preventDefault();

      // get the value of the input
      const question = document.getElementById('prompt-input').value;

      // call the function that handles the fetch request to our backend
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
      const question = document.getElementById('prompt-input').value;

       //call the function that handles the fetch request to our backend
      handleSubmitQuestion(question).then((data) => {
          // add the chatbot's response to the DOM when the fetch request is complete
          addBotResponseToDialogueBox(data);
      });
    }
  });
};

//automatically scrolls to the bottom of the dialogue container
function scrollToBottom() {
  const container = document.getElementById('dia-container');
  container.scrollTop = container.scrollHeight;
}



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
    return content



}

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
    document.getElementById('prompt-input').value = '';

    // focus the input box
    document.getElementById('prompt-input').focus()
}

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
    document.getElementById('prompt-input').value = '';

    // focus the input box
    document.getElementById('prompt-input').focus()
}
