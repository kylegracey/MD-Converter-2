const fs = require('fs');

//Paths to local files
const inputSrc = "./json/input.json";

let outputData = {};

function writeOutput(data) {
  outputData += data;
  console.log('Data length is now: ' + outputData.length);
};

module.exports = function(closeCallback) {

  // console.log('now in input-reader');

  let read_stream = fs.createReadStream(inputSrc);
  read_stream.on('data', writeOutput);
  read_stream.on('close', closeCallback);

};
