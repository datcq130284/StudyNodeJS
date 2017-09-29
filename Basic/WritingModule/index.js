console.log("A simple node application");

var fruit = require('./fruit.js');

var banana = fruit('Banana', 'yellow fruit');
var cherry = fruit('Cherry', 'small red fruit');

console.log(banana.getInfo());
console.log(cherry.getInfo());