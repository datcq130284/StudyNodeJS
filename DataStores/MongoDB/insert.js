console.log("Connecting MongoDB");

var mongo = require('mongodb');
var client = mongo.MongoClient;
var url = "mongodb://localhost:27017/mydemodb";

client.connect(url, function(err,db){
    if(err) throw err;
    
    console.log("Database connected");
    //db.close();
    
    //--- Insert ---
        // Insert one
        // var myobj = {
        //     name: "Test Name",
        //     description: "Test Description"
        // }
        // db.collection("foodgroups").insertOne(myobj, function(err, res){
        //     if(err) throw err;

        //     console.log("1 document inserted");
        //     db.close();
        // });

        // Insert multiple
        var myobj = [
            {   _id:6, name: "Test Name", description: "Test Description" },
            {   _id:7, name: "Test Name", description: "Test Description" },
            {   _id:8, name: "Test Name", description: "Test Description" },
            {   _id:9, name: "Test Name", description: "Test Description" },
            {   _id:10, name: "Test Name", description: "Test Description" }
        ];
        db.collection("foodgroups").insertMany(myobj, function(err, res){
            if(err) throw err;

            console.log("Number of documents inserted: "+res.insertedCount);
            db.close();
        });
    //--------------
});