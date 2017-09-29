var request = require('request');

request('http://www.yahoo.com',function(error, response, body){
    if(!error && response.statusCode==200){
        console.log(body);
    }

    if(error){
        console.log(error);
    }
});