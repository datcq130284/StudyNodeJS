console.log("Connecting MongoDB");

var mongo = require('mongodb');
var client = mongo.MongoClient;
var url = "mongodb://localhost:27017/mydemodb";

client.connect(url, function(err,db){
    if(err) throw err;
    
    console.log("Database connected");
    //db.close();
    
    //--- Find ---
        //Find one collection
        // db.collection("foodgroups").findOne({},function(err, result){
        //     if(err) throw err;

        //     console.log(result.name);
        //     db.close();
        // });

        //Find all collection
        // db.collection("foodgroups").find({}).toArray(function(err, result){
        //     if(err) throw err;

        //     console.log(result);
        //     db.close();
        // });

        //Find some collection columns
        db.collection("foodgroups").find({}, {
            //_id:false, name:true, description:true
            _id:false
        }).toArray(function(err, result){
            if(err) throw err;

            console.log(result);
            db.close();
        });
    //--------------
});