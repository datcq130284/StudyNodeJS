console.log("Using socket.io");

var http = require('http');
var fs = require('fs');


var index = fs.readFileSync(__dirname + "/index.html");

var server = http.createServer(function(req,res){
    res.writeHead(200, {'Content-Type':'text/html'});
    res.end(index);
});

var io = require('socket.io')(server);
io.on('connection', function(socket){
    console.log("connection delected");

    io.emit("newConnection", {id:socket.id});

    socket.on('disconnect', function(){
        console.log('client disconnected');
        io.emit("clientDisconnected", {id:socket.id})
    });

    socket.on("chat", function(data){
        var message = data.message;

        //listen for chat event and send it back to al
        //connected sockets
        io.emit("chat", data);
    });
});

var port = 3456;
server.listen(port, function(){
    console.log("Server listening on port: " + port);
});