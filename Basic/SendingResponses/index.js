var connect = require('connect');

var app = connect()
    .use(function(req,res){
        
        switch(req.url ){
            case "/hello":
                console.log("sending plain");
                res.end("Hello from app");
                break;

            case "/hello.json":
                console.log("sending json");
                var data = {text:'Hello'};
                var jsonData = JSON.stringify(data);

                res.setHeader('Content-Type','application/json');
                res.end(jsonData);
                break;

            case "/statusCodeDemo":
                console.log("sending 404 status code");
                res.statusCode = 404;
                res.end("Oops, could you find something");
                break;

            default:
                console.log("sending 404 status code");
                res.statusCode = 404;
                res.end("Oops, could you find something");
                break;
        }
        
    })
    .listen(3456);


console.log("Listening on port 3456");