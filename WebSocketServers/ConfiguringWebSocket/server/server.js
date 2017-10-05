console.log("Creating A WebSocket Server");

var http = require('http');
var websocket = require('websocket');

var httpServer = http.createServer(function(req, res){
    //res.writeHead(404);
    res.end("Welcome websocket server");
}); 

var port = 3456;
httpServer.listen(port, function(){
    console.log("Server listening on port: "+port);
});


var WebSocketServer = websocket.server;
wsServer = new WebSocketServer({
    httpServer: httpServer,
    autoAcceptConnections: false
})

var isOriginAllowed = function(origin){
    return true;
}

wsServer.on('request', function(request){
    if(!isOriginAllowed(request.origin)){
        request.reject;

        console.log("Request was rejected based on origin");
        return;
    }

    var connection = request.accept("demo-protocol",request.origin);
    console.log("Request was accepted");

    connection.on('message', function(message){
        var messageType = message.type;

        if(messageType === "utf8"){
            console.log("UTF8 message received: " + message.utf8Data);

            connection.sendUTF("Got the UTF8 message. Thanks.");
        }
        else if(messageType === "binary"){
            console.log("Binary message received. Length " + message.binaryData.length);

            connection.sendUTF("Got the binary message. Thanks. Sending it back");
            connection.sendBytes(message.binaryData);
        }
    });

    connection.on('close', function(reasonCode, description){
        console.log("Connection was disconnected");
        console.log(reasonCode, description);
    })
});