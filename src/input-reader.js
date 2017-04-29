const fs = require('fs');

//Paths to local files
const inputSrc = "./json/input.json";

module.exports = function(writeCallback, closeCallback) {

  console.log('now in input-reader');

  let read_stream = fs.createReadStream(inputSrc);
  read_stream.on('data', writeCallback);
  read_stream.on('close', closeCallback);

};
