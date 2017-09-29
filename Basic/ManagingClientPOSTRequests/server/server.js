var express = require('express');
var formidable = require('formidable');
var app = express();

app.use(function(req,res){
    if(req.method.toLowerCase() == "post"){
        var form = new formidable.IncomingForm();

        form.uploadDir = __dirname + '/uploads';
        form.keepExtensions = true;
        form.type = "multipart";

        form.parse(req, function(err, fields, files){
            var firstName = fields.userFirstName;
            var lastName = fields.userLastName;

            console.log("User info parsed from form: " + firstName + " " + lastName);

            res.writeHead(200, {'content-type':'text/plain'});
            res.end("Form data recieved");
        });

        return;
    }
})

//Start server
var port = 3456;
app.listen(port);
console.log("Listening on port " + port);