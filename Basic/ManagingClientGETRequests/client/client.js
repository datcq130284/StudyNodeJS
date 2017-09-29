var request = require('request');
var fs = require('fs');

request("http://localhost:3456/hello", function(error, response, body){
    if(error){
        console.log(error);
    }

    console.log(response.body);
    console.log(response.statusCode);
    console.log(response.headers);
})
.pipe(fs.createWriteStream('data/pipedFile.txt'));

//================================================
var options = {
    url: "http://localhost:3456/printRequestHeaders",
    headers: {'X-DEMO-HEADER':"myDemoHeader"}
}

var callback = function(error, response, body){
    if(error) console.log(error);
    else console.log(body);
}
request(options, callback);