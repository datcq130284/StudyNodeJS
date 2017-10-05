console.log("Working with WebSockets using ws");

var ws = require('ws');

var WebSocketServer = ws.Server;
var wss = new WebSocketServer({host: 'localhost', port: 4567 });

wss.on('connection', function(ws){
    ws.on('message', function(message){
        console.log("Server received message: " + message);

        ws.send("Thanks for the message. "+ message, function(err){
            if(err){
                console.log("Error sending to client", err);
                return;
            }

            console.log("Server got message and echoed back to client");
        });
    });
});