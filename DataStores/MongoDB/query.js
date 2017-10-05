console.log("Connecting MongoDB");

var mongo = require('mongodb');
var client = mongo.MongoClient;
var url = "mongodb://localhost:27017/mydemodb";

client.connect(url, function(err,db){
    if(err) throw err;
    
    console.log("Database connected");
    //db.close();
    
    //--- Query ---
        //Filter the result
        // var query = { name: 'Test Name'};
        // db.collection("foodgroups").find(query).toArray(function(err, result){
        //     if(err) throw err;

        //     console.log(result);
        //     db.close();
        // });

        //Filter with regular expressions
        var query = { name: /^v/}; //Find start with letter f
        db.collection("foodgroups").find(query).toArray(function(err, result){
            if(err) throw err;

            console.log(result);
            db.close();
        });
    //--------------

});