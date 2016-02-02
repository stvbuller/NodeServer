var http = require('http')


var PORTONE = 7000;
var PORTTWO = 7500;


var goodResponse = ["You're great!", "You're Wonderful!", "Your Awesome"]
var badResponse = ["You're not great!", "You're not Wonderful!", "You're not Awesome"]

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

var handleRequestOne = function (req, res) {
  var num = getRandomInt(0, goodResponse.length);
  res.end(goodResponse[num] + " " + req.url);
}

var handleRequestTwo = function (req, res) {
  var num = getRandomInt(0, badResponse.length);
  res.end(badResponse[num] + " " + req.url);
}

var serverOne = http.createServer(handleRequestOne);

serverOne.listen(PORTONE, function() {
  console.log("Server is listening at http://localhost:%s", PORTONE);
});

var serverTwo = http.createServer(handleRequestTwo);

serverTwo.listen(PORTTWO, function() {
  console.log("Server is listening at http://localhost:%s", PORTTWO);
});

