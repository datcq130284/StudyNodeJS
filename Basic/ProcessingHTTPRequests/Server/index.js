var http = require('http');
var connect = require('connect');
var bodyParser = require('body-parser');

var app = connect()
    .use(bodyParser.urlencoded(
        {extended:true}
    ))
    .use(function(req,res){
        var parsedInfo = {
            firstName : req.body.userFirstName,
            lastName : req.body.userLastName
        };
        
        res.end("User info parsed from form: " + parsedInfo.firstName + " " + parsedInfo.lastName)
    });

http.createServer(app).listen(3456);

console.log("Listening on port 3456");