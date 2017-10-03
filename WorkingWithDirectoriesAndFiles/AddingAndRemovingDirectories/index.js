console.log("Adding and Removing Directories");

var fs = require('fs');

fs.mkdir("DirectoryA/DirectoryB", function(err){
    if(err){
        console.log(err);
    }else{
        console.log("Directory created.")
    }
});

fs.rmdir("DirectoryA/DirectoryB", function(err){
    if(err){
        console.log(err);
    }else{
        console.log("Directory removed.")
    }
});