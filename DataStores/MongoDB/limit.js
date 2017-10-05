console.log("Connecting MongoDB");

var mongo = require('mongodb');
var client = mongo.MongoClient;
var url = "mongodb://localhost:27017/mydemodb";

client.connect(url, function(err,db){
    if(err) throw err;
    
    console.log("Database connected");
    //db.close();
    
    //--- Limit ---
        db.collection("foodgroups").find().limit(5).toArray(function(err, result){
            if(err) throw err;

            console.log(result);
            db.close();
        });
    //--------------

});