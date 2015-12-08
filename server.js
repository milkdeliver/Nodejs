var http = require("http");
var url = require("url");
function start() {
  http.createServer(function(request, response) {
    console.log("Request for " + pathname + " received.");
    var pathname = url.parse(request.url).pathname;
    response.writeHead(200, {"content-type": "text/plain"});
	  response.write("Hello World");
	  response.end();
  }).listen(8888);
	console.log("Server has started");
}

exports.start = start;
