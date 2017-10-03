console.log("Working with Query String");

var queryString = require('queryString');

var testBaseUrl = "http://localhost:3456/path/to/resource";

var queryDataObject = {
    'resourceId': '1',
    'username': 'andy'
}

//var stringFromObject = queryString.stringify(queryDataObject);
var stringFromObject = queryString.stringify(queryDataObject, ";", ":");

console.log(testBaseUrl+"?"+stringFromObject);