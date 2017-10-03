console.log("Navigating Directories");

var fs = require('fs');

/*fs.readdir('DirectoryA',function(err,files){
    if(err){
        console.log(err);
    }else{
        console.log("----- Directory Listing -----");

        files.forEach(function(file){
            var filePath = "DirectoryA/" + file;

            fs.stat(filePath,function(error,stats){
                if(error){
                    console.log(error);
                }else{
                    if(stats.isFile()){
                        console.log(filePath+" is a file");
                    }else{
                        console.log(filePath+" is a directory");
                    }
                }
            })
        });
    }

});*/

var contentsSync = fs.readdirSync('DirectoryA');
console.log(contentsSync);