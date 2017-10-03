console.log("Watching For Directory Changes");

var fs = require('fs');

fs.watch("DirectoryA", {persistent:true}, function(event,filename){
    if(event == "rename"){
        console.log("rename event in directory: " + filename);
    }
    else if(event == "change"){
        console.log("change event in directory: " + filename);
    }
});