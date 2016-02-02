var http = require('http')


var PORTONE = 7000;
var PORTTWO = 7500;


var goodResponse = ["You're great!", "You're Wonderful!", "Your Awesome"]
var badResponse = ["You're not great!", "You're not Wonderful!", "Your not Awesome"]



var handleRequestOne = function (req, res) {
  var num = getRandomInt(0, goodResponse.length);
  res.end(goodRespose[num] + req.url);
}


var serverOne = http.createServer(handleRequestOne);

var handleRequestTwo = function (req, res) {
  res.end("You're not so great! You hit: " + req.url);
}

serverOne.listen(PORTONE, function() {
  console.log("Server is listening at http://localhost:%s", PORTONE);
});
var serverTwo = http.createServer(handleRequestTwo);

serverTwo.listen(PORTTWO, function() {
  console.log("Server is listening at http://localhost:%s", PORTTWO);
});

