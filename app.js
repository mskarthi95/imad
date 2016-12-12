// include the http module
var http = require('http');

// create a webserver
http.createServer(function (req, res) {

    // respond to any incoming http request
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World\n');

}).listen(1337, '127.0.0.1');

// log what that we started listening on localhost:1337
console.log('Server running at 127.0.0.1:1337');