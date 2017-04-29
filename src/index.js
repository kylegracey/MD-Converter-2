const http = require('http');
const fs = require('fs');
const readInput = require('./input-reader.js');

function onRequest(request, response) {
  response.writeHead(200, {'Content-Type': 'utf8'});

  function writeCallback(data) {
    response.write(data);
  }

  function closeCallback() {
    console.log('Stream closed.');
    response.end();
  }

  readInput(writeCallback, closeCallback);

}

http.createServer(onRequest).listen(3000, '127.0.0.1');

console.log('Server started.');
