console.log("Connecting MongoDB");

var mongo = require('mongodb');
var client = mongo.MongoClient;
var url = "mongodb://localhost:27017/mydemodb";

client.connect(url, function(err,db){
    if(err) throw err;
    
    console.log("Database connected");
    //db.close();
    
    //--- Delete ---

        //Delete document
        // var query = { name: 'test Name'}; 
        // db.collection("foodgroups").deleteOne(query, function(err, obj){
        //     if(err) throw err;

        //     console.log("1 document deleted");
        //     db.close();
        // });

        //Delete many
        var query = { name: /^T/}; 
        db.collection("foodgroups").deleteMany(query, function(err, obj){
            if(err) throw err;

            console.log(obj.result.n + " document(s) deleted");
            db.close();
        });
    //--------------

});