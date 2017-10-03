console.log("Reading Files");

var fs = require('fs');

//fs.readFile("DirectoryA/fileA.txt", function(err,data){
// fs.readFile("DirectoryA/fileA.txt", "utf8", function(err,data){
//     if(err){
//         console.log(err);
//     }else{
//         console.log(data);
//     }
// })

var contents = fs.readFileSync("DirectoryA/fileB.txt", "utf8");
console.log(contents);