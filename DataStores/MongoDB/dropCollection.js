console.log("Connecting MongoDB");

var mongo = require('mongodb');
var client = mongo.MongoClient;
var url = "mongodb://localhost:27017/mydemodb";

client.connect(url, function(err,db){
    if(err) throw err;
    
    console.log("Database connected");
    //db.close();
    
    //--- Drop Collection ---
        //Drop Collection
        // db.collection("foodgroups").drop( function(err, delOK){
        //     if(err) throw err;

        //     if(delOK) console.log("Collection deleted");
        //     db.close();
        // });

        db.dropCollection("foodgroups", function(err, delOK){
            if(err) throw err;

            if(delOK) console.log("Collection deleted");
            db.close();
        });
    //--------------

});