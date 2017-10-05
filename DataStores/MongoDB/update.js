console.log("Connecting MongoDB");

var mongo = require('mongodb');
var client = mongo.MongoClient;
var url = "mongodb://localhost:27017/mydemodb";

client.connect(url, function(err,db){
    if(err) throw err;
    
    console.log("Database connected");
    //db.close();
    
    //--- Update ---
        //Update Document
        // var query = { description: 'update document'}; 
        // var newvalues = { name: 'Update document', description: 'Document updated'}

        // db.collection("foodgroups").updateOne(query, newvalues, function(err, res){
        //     if(err) throw err;

        //     console.log(" 1 document updated");
        //     db.close();
        // });

        //Update Only Specific Fields
        // var query = { description: 'Update specific'}; 
        // var newvalues = { $set: { description: 'Update specific document'} }

        // db.collection("foodgroups").updateOne(query, newvalues, function(err, res){
        //     if(err) throw err;

        //     console.log(" 1 document updated");
        //     db.close();
        // });

        //Update Many Documents
        var query = { description: /^t/ }; 
        var newvalues = { $set: { description: 'Test document updated'} }

        db.collection("foodgroups").updateMany(query, newvalues, function(err, res){
            if(err) throw err;

            console.log(res.result.nModified + " document(s) updated");
            db.close();
        });
    //--------------

});