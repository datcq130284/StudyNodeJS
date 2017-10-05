console.log("Creating a TCP Server Using The Net Module");

var net = require('net');
var server = net.createServer();

var clientSocket;
var numConnections = 0;

server.on('connection', function(socket){
    
    clientSocket = socket;

    numConnections++;

    console.log("TCP Server has received a connection");

    clientSocket.write("Welcome. You are connection "+numConnections+".");

    // if(numConnections >= 1){
    //     console.log("Closing server. No more new connections allowed");
    //     server.close(function(){
    //         console.log("Server fully closed");
    //     });
    // }

    socket.on('data', function(data){
        console.log("Recieved some data:", data.toString());
        if(clientSocket) clientSocket.write("Thanks for saying hi.");
    });

    // server.getConnections(function(err, count){
    //     if(!err) console.log("Concurrent Connections: "+count);
    // })

    socket.on('error', function(e){
        console.log("Error caught: " + e.code);
    });

    socket.on('close', function(had_error){
        var message = "Client disconnected";
        message += had_error ? " doe to error" : " normally";
        console.log(message);
    });
});

//server.maxConnections = 1;

server.on('error', function(e){
    console.log("Error caught: "+e.code);

    if(e.code == 'EADDRINUSE'){
        console.log("Switching to fallback port in 2 seconds");

        setTimeout(function(){
            server.listen(4568, function(){
                console.log("Listening on port 4568");
            })
        }, 2000);
    }
});

server.listen(4567, function(){
    console.log("TCP Server listening")
})

//telnet localhost 4567