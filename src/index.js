const http = require('http');
const fs = require('fs');
const url = require('url');
const readInput = require('./input-reader.js');

function onRequest(request, response) {
  response.writeHead(200, {'Content-Type': 'utf8'});

  function closeCallback() {
    console.log('Stream closed.');
    response.end();
  }

  if (url.parse(request.url).pathname == '/') {
    readInput(closeCallback);
  } else {
    response.end()
  }

}

http.createServer(onRequest).listen(3000, '127.0.0.1');

console.log('Server started.');
