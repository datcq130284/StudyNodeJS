console.log('Hello NodeJS');

//require and exports
var module = require('./module');

console.log('Hello ' + module.firstName + ' ' + module.lastName);
console.log(module.randomNum());

var moduleFunc = require('./moduleFunction');
console.log(moduleFunc());