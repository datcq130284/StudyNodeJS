console.log("Working with WebSockets using ws");

var WebSocket = require('ws');

var wsClient = new WebSocket('ws://localhost:4567');

wsClient.on('open', function(){
    console.log("Socket open. Client connected to the server");

    wsClient.send("Hi from web socket client", function(err){
        if(err){
            console.log("Error sending to server", err);
            return;
        }

        console.log("Client successfully sent message to server");
    });

    wsClient.on('message', function(data, flags){
        console.log("Client recieved data from server: ", data);

        //data.binary is set if data is binary
        //otherwise its utf8 encoded

        //flags.masked is set if data was masked
        console.log(flags);
    });
});