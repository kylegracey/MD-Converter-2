const http = require('http');
const fs = require('fs');

//Paths to local files
const inputSrc = "./json/input.json";

http.createServer(function (request, response) {
  response.writeHead(200, {'Content-Type': 'text/plain'});

  let read_stream = fs.createReadStream(inputSrc);
  read_stream.on('data', writeCallback);
  read_stream.on('close', closeCallback);

  function writeCallback(data) {
    console.log(data);
  }

  function closeCallback() {
    console.log('Stream closed.');
    response.end();
  }
}).listen(3000, '127.0.0.1');

console.log('Server started.');
