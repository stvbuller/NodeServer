var http = require('http'), url = require('url');
var fs = require('fs');

var PORT = 8080;

var handleRequest = function (req, res) {
  var url_parts = url.parse(req.url);
  switch (url_parts.pathname) {
    case '/':
      display_root(req, res);
      break;
    case '/Food':
      display_food(req, res);
      break;
    case '/Movies':
      display_movies(req, res);
      break;
    case '/CSS Frameworks':
      display_css(req, res);
      break;
    default:
      display_404(req, res);
      break;
  }
}

var display_root = function(req, res) {
  var myHTML = "<html><body>";
  myHTML += "<h1>Home page!</h1>";
  myHTML += "<a href='/test'>Test Page</a>";
  myHTML += "</body></html>";
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end(myHTML);
}

var display_food = function(req, res) {
  //check liri for fsread also check documentation
  fsread
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end(myHTML);
}

var display_movies = function(req, res) {
  var myHTML = 
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end(myHTML);
}
 
var display_css = function(req, res) {
  var myHTML = 
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end(myHTML);
}

var display_404 = function(req, res) {
  res.writeHead(404, {'Content-Type': 'text/html'});
  res.write("<h1>404 Not found</h1>");
  res.end("This is not it!");
}


var server = http.createServer(handleRequest);

server.listen(PORT, function() {
  console.log("Server is listening at http://localhost:%s", PORT);
});

