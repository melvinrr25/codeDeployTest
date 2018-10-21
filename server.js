const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.get('/', function(req, res){
  res.json({
    name: 'melvin', 
    email: 'melvinrr25@gmail.com', 
    position: 'developer', 
    skill: ['JS', 'Ruby', 'AWS'],
    hobbies: ['soccer', 'football'], 
  });
});

app.get('/ping', function(req, res){
  res.sendStatus(200);
});

app.get('*', function(req, res){
  res.sendStatus(404);
});

function onError(error) {
  var fs = require('fs');

  if (error.syscall !== 'listen') {
    fs.writeFile('listen-' + String(Date()) + '.tmp', '', function(err) {
      if (err) throw err;
    });
    throw error;
  }

  switch (error.code) {
    case 'EACCES':
      fs.writeFile('EACCESS-' + String(Date()) + '.tmp', '', function(err) {
        if (err) throw err;
      });
      process.exit(1);
      break;

    case 'EADDRINUSE':
      fs.writeFile('EACCESS-' + String(Date()) + '.tmp', '', function(err) {
        if (err) throw err;
      });
      process.exit(1);
      break;

    default:
      throw error;
  }
}

app.listen(3000).on('error', onError);
