console.log("Serving Static Files");

var connect = require('connect');
var serveStatic = require('serve-static');

var app = connect()
    .use(serveStatic('myPublicFolder'))
    .use(function(req,res){
        res.end("Welcome to our demo app.");
    })
    .listen(3434);

console.log("Listening on port 3456");