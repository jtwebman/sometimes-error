#!/usr/bin/env node

var http = require('http');

// Setup Parmams
var PORT=process.env.TEST_PORT || 80;
var SUCCESS_TEXT = 'Test Worked!';
var ERROR_CODES = [502, 503, 504];

function handleRequest(request, response) {
  var rand = Math.floor(Math.random() * (1000 + 1));
  if (rand > 990) { //1% of the time error
    response.writeHead(ERROR_CODES[rand % ERROR_CODES.length], { 'Content-Type': 'text/html' });
    response.end();
  } else {
    response.end(SUCCESS_TEXT);
  }

}
var server = http.createServer(handleRequest);
server.listen(PORT, function(){
  console.log("Test service is listening on port: %s", PORT);
});
