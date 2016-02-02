var http = require('http')


var PORTONE = 7000;
var PORTTEO = 7500;


var handleRequestOne = function (req, res) {
  res.end("You're great! You hit: " + req.url);
}


var serverOne = http.createServer(handleRequestOne);

var handleRequestTwo = function (req, res) {
  res.end("You're not so great! You hit: " + req.url);
}

var serverTwo = http.createServer(handleRequestTwo);
