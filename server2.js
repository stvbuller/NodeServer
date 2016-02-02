var http = require('http'), url = require('url'); 
var fs = require('fs');


var PORTONE = 7000;
// var PORTTWO = 7500;


var handleRequestOne = function (req, res) {
  var url_parts = url.parse(req.url);
  switch (url_parts.pathname) {
    case '/':
      display_root(req, res);
      break;
    case '/form':
      display_food(req, res);
      break;
    default:
      display_404(req, res);
      break;
  }
}

var display_root = function(req, res) {
  //check liri for fsread also check documentation
  fs.readFile("./form.html", "utf8", function(err, data){
    if (err){
      console.log(err);
    }
    else{
      var myHTML = data;
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.end(myHTML);
    }
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end(myHTML);
}

var serverOne = http.createServer(handleRequestOne);

serverOne.listen(PORTONE, function() {
  console.log("Server is listening at http://localhost:%s", PORTONE);
});
// var serverTwo = http.createServer(handleRequestTwo);

// serverTwo.listen(PORTTWO, function() {
//   console.log("Server is listening at http://localhost:%s", PORTTWO);
// });
