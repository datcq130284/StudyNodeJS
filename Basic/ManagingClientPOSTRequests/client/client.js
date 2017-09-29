var request = require('request');
var fs = require('fs');

var data = {
    userFirstName: "John",
    userLastName: "Doe",
    myBuffer: new Buffer([1]), //buffer for passing file data
    myFile: fs.createReadStream(__dirname + "/images/image.png") //read stream containing file data to pass
}

var callback = function(error, response, body){
    if(error) console.log(error);
    else console.log(body);
}

//request.post('http://localhost:3456').form(data);
//request.post('http://localhost:3456',{form:data});

//request.post('http://localhost:3456',{form:data}, callback);

request.post({
    url: 'http://localhost:3456',
    formData: data
}, function optionCallback(err,body,response){
    if(err){
        return console.error('oops, there was a problem uploading');
    }
    console.log('File uploaded to server');
});