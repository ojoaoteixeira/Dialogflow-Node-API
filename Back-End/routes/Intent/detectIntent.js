<<<<<<< HEAD
=======
const express = require('express')
const router  = express.Router()
const credentials = require ('../../Cred.js');


>>>>>>> master
async function detectIntent(req,res) {
const dialogflow = require('dialogflow');
const uuid = require('uuid');
let text = req.body.text; 
const sessionId = uuid.v4();
const userData = {
<<<<<<< HEAD
  project_id : 'Your project-id',
config :{
  credentials :{
  private_key: "Your private_key",
  client_email: "Your client_email"
=======
  project_id : 'Your project_id',
config :{
  credentials :{
  private_key: "Your private_key",
  client_email:"Tour client_email"
>>>>>>> master
    }
  }
}
// Create a new session
const sessionClient = new dialogflow.SessionsClient(userData.config);
const sessionPath = sessionClient.sessionPath(userData.project_id, sessionId);
// The text query request.
const request = {
  session: sessionPath,
  queryInput: {
    text: {
      // The query to send to the dialogflow agentou 
      text: `${text}`,
      // The language used by the client (en-US)
      languageCode: 'en-US',
    },
  },
};

// Send request and log result
const responses = await sessionClient.detectIntent(request);
console.log('Detected intent');
const result = responses[0].queryResult;
console.log(`  Query: ${result.queryText}`);
console.log(`  Response: ${result.fulfillmentText}`);
if (result.intent) {
  console.log(`  Intent: ${result.intent.displayName}`);
} else {
  console.log(`  No intent matched.`);
}
const responsetouser = result.fulfillmentText;
//  return responsetouser;
let respData = {
data: responsetouser
};
res.send(respData);
}

module.exports = {
  detectIntent : detectIntent
}
