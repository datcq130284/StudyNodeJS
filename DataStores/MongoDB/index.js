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
    // db.createCollection("foodgroups", function(err,res){
    //     if(err) throw err;

    //     console.log("Collection created");
    // })
    //--------------
    
    //--- Select ---
    //Select one collection
    // db.collection("foodgroups").findOne({},function(err, result){
    //     if(err) throw err;

    //     console.log(result.name);
    //     db.close();
    // });

    //Select all collection
    // db.collection("foodgroups").find({}).toArray(function(err, result){
    //     if(err) throw err;

    //     console.log(result);
    //     db.close();
    // });

    //Select some collection columns
    // db.collection("foodgroups").find({}, {
    //     //_id:false, name:true, description:true
    //     _id:false
    // }).toArray(function(err, result){
    //     if(err) throw err;

    //     console.log(result);
    //     db.close();
    // });
    //--------------

    //--- Insert ---

    //--------------
});