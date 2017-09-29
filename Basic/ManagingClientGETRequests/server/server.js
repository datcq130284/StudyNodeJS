var connect = require('connect');

var app = connect()
    .use(function(req,res){
        switch(req.url){
            case "/hello":
                console.log("sending plain");
                res.end("Hello from app");
                break;

            case "/printRequestHeaders":
                var headers = req.headers;
                console.log("echoing headers");
                console.log(headers);
                res.end("Headers printed in console");
                break;

            default:
                res.end("Nothing");
                break;
        }
    })
    .listen(3456);

console.log("Listening on port 3456");