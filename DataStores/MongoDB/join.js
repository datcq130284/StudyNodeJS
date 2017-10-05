console.log("Connecting MongoDB");

var mongo = require('mongodb');
var client = mongo.MongoClient;
var url = "mongodb://localhost:27017/mydemodb";

client.connect(url, function(err,db){
    if(err) throw err;
    
    console.log("Database connected");
    //db.close();
    
    //--- Join ---
        db.collection('orders').aggregate([
            {   
                $lookup:{
                    from: 'foodgroups',
                    localField: 'foodgroup_id',
                    foreignField: '_id',
                    as: 'orderdetails'
                }
            }
        ], function(err, res){
            if(err) throw err;
            
            console.log(JSON.stringify(res));
            db.close();
        });
    //--------------

});