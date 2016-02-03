var http = require('http');
var url = require('url');
var fs = require('fs');

var PORT = 8090;

var server = http.createServer(function(req, res) {
  var method = req.method.toLowerCase();
  var requestData = '';

  var url_parts = url.parse(req.url);

  switch (url_parts.pathname) {
    case '/':
      fs.readFile('form.html', 'utf-8', function(err, result) {
        res.end(result);
      });
      break;

    case '/signup':
      console.log('We got here!');
      req.on("data", function(msg) {
        console.log("the msg is ", msg);
        requestData += msg;
      });

      req.on("end", function() {
        console.log("Got the end");
        res.writeHead(200, {'Content-Type': 'text.html'});
        res.end(requestData);
      });
      break;
  }
});

server.listen(PORT, function() {
  console.log("Server listening on http://localhost:%s", PORT);
});

