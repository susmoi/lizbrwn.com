import express from 'express';
import * as path from 'path';
import bodyParser from 'body-parser';
import fetch from 'node-fetch';
import * as dotenv from 'dotenv';
import pkg from 'openai';
const { Configuration, OpenAIApi, } = pkg;


import {enrichUserPromptWithContext} from "./utils.js";

// load environment variables from .env file
dotenv.config();
// initialize express app
export const app = express()

// parse application/json request bodies
app.use(bodyParser.json())

// serve static files from client folder (js, css, images, etc.)
app.use(express.static(path.join(process.cwd(), 'client')))

// create http post endpoint that accepts user input
// and sends it to OpenAI Completions API
// then returns the response to the client
app.post('/api/openai', async (req, res) => {
  const { question } = req.body;

  // send a request to the OpenAI API with the user's prompt
  const response = await fetch('https://api.openai.com/v1/chat/completions',{
    method: 'POST',
    headers: {
        // notice how we're using process.env here
        // this is using the environment variable from the .env file
        'Content-Type': 'application/json',
        //'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
        'Authorization': `Bearer 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`,
        },

        // construct the request payload
        // to be sent to the OpenAI API,

        body: JSON.stringify({

        // Sends request to custom chewybot model
        //model: 'davinci:ft-liz:v2chewybot-2023-03-17-21-58-11',

        // Sends request to gpt-4
        model: 'gpt-4',

        // passing in an 'enriched' version
        // of the user's prompt
        //for custom chewybot
        //prompt: enrichUserPromptWithContext(question),

        //for base model
        messages:[
                  {role: "user", content: question}
                ]
        // the maximum number of tokens/words the bot should return
        // in response to a given prompt
        //for custom models
        //max_tokens: 100,
        //temperature: .8,
        //for base models
        //max_tokens=100
        //temperature=.8
    }),
});

      // parse the response from OpenAI as json data
      const data = await response.json();

      //for custom model requests
      //res.json({ data: data.choices[0].text });

      //for base model requests
      res.json({ content: data.choices[0].message.content });

      // log the data object to the console
      //console.log(data.choices[0].message.content);

});

// set the port to listen on
// which is either the port specified in the .env
// or 3000 if no port is specified
const PORT = process.env.PORT || 3000;

// start the express server
app.listen(PORT, () => console.log(`Server listening on localhost:${PORT}!`));
