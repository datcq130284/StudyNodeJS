console.log("Connecting MongoDB");

var mongo = require('mongodb');
var client = mongo.MongoClient;
var url = "mongodb://localhost:27017/mydemodb";

client.connect(url, function(err,db){
    if(err) throw err;
    
    console.log("Database connected");
    //db.close();

    //--- Create collection ---
        //Create collection
        db.createCollection("foodgroups", function(err,res){
            if(err) throw err;

            console.log("Collection created");
        })
    //--------------
});