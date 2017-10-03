console.log("Watching For File Changes");

var fs = require('fs');
var nameOfFile = "DirectoryA/textFile.txt";

// fs.watch(nameOfFile, {persistent:true}, function(event,filename){
//     console.log("Change in watched file" + nameOfFile);
// });

fs.watchFile(nameOfFile, {persistent:true, interval:5000}, function(event,filename){
    //console.log(event);
    console.log("Change in watched file" + nameOfFile);
});