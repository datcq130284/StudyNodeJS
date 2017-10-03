console.log("Parsing URLs");

var url = require('url');
var testUrl = "http://john:1234567@localhost:3456/path/to/resource?resourceId=someValue&resourceType=someType";

var parseURLObject = url.parse(testUrl,true); //true: query to object

console.log(parseURLObject);

var urlString = url.format(parseURLObject);

console.log(urlString);