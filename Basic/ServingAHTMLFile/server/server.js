console.log("Serving Static Files");

var connect = require('connect');
var serverStatic = require('server-static');

var app = connect()
    .use(serverStatic('myPublicFolder'))
    .use(function(req,res){
        res.end("Welcome to our demo app.");
    })
    .listen(3456);

console.log("Listening on port 3456");