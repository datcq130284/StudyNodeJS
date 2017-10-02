console.log("Handling Web Server Events");

var http = require('http');
var server = http.createServer();

server.on('request', function(req,res){
    console.log("Request received", req.headers);
    res.end("Thanks, I got your request");
});

server.on('upgrade',function(req,socket,head){
    console.log("Upgrade the connection to a web socket connection");
});

var port = 3456;
server.listen(port, function(){
    console.log("HTTP Server Listening");
});