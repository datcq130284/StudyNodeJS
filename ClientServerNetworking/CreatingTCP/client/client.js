console.log("Creating a TCP Client Application");

var net = require('net');

var options = {
    port: 4567,
    host: "localhost"
};

var demoClientName = "myUniqueClientID"
var clientSocket = net.connect(options);

clientSocket.on('connect',function(){
    console.log("Client connected successfully");

    var message = "I am client with address "+ demoClientName + "";

    var dataSent = clientSocket.write(message, 'utf8', function(){
        //console.log("Data was written out.");
        console.log("Data sent to server: " + clientSocket.bytesWritten);
    });

    clientSocket.on('drain', function(){
        console.log('Buffer completeply empty');
    });

    clientSocket.on('data',function(data){
        console.log("Data recieved from server: " + data);
        //console.log("Data read from server: " + clientSocket.bytesRead);
    });
})