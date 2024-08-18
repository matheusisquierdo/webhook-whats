const express = require("express");
const app = express();
const port = process.env.PORT || 3001;
app.use(express.json())

app.get('/webhook/', function (req, res) {
  
  if (req.query['hub.verify_token'] === 'TESTETOKEN') {
     res.send(req.query['hub.challenge'])
     console.log('Sucess, Challenge loop crossed')
  } else{ 
    res.send('Error, wrong token')
  }
})

app.post("/webhook", (req, res) => {
  console.log(JSON.stringify(req.body, null, 2));
  // Parse the request body from the POST
  let body = req.body;

  // // info on WhatsApp text message payload: https://developers.facebook.com/docs/whatsapp/cloud-api/webhooks/payload-examples#text-messages
  // if (req.body.object) {
  //   if (
  //     req.body.entry &&
  //     req.body.entry[0].changes &&
  //     req.body.entry[0].changes[0] &&
  //     req.body.entry[0].changes[0].value.messages &&
  //     req.body.entry[0].changes[0].value.messages[0]
  //   ) {

  //     // do your stuff here.....

  //     let phone_number_id =
  //       req.body.entry[0].changes[0].value.metadata.phone_number_id;
  //     let from = req.body.entry[0].changes[0].value.messages[0].from; // extract the phone number from the webhook payload
  //     let msg_body = req.body.entry[0].changes[0].value.messages[0].text.body; // extract the message text from the webhook payload
  //   }
    res.sendStatus(200);
  // } else {
  //   // Return a '404 Not Found' if event is not from a WhatsApp API
  //   res.sendStatus(404);
  // }
});

const server = app.listen(port, () => console.log(`Example app listening on port ${port}!`));

server.keepAliveTimeout = 120 * 1000;
server.headersTimeout = 120 * 1000;
