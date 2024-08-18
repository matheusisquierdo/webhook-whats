const express = require("express");
const app = express();
const port = process.env.PORT || 3001;

app.get('/webhook/', function (req, res) {
  console.log(req.body);
  if (req.query['hub.verify_token'] === 'TESTETOKEN') {
     res.send(req.query['hub.challenge'])
     console.log('Sucess, Challenge loop crossed')
  } else{ 
    res.send('Error, wrong token')
  }
})

const server = app.listen(port, () => console.log(`Example app listening on port ${port}!`));

server.keepAliveTimeout = 120 * 1000;
server.headersTimeout = 120 * 1000;
