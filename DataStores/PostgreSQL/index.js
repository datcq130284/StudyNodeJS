console.log("Connecting to PostgreSQL");

var pg = require('pg');

var conString = "postgre://postgre:password@localhost:5432/myDemoDb";

// pg.connect(conString, function(err,client,done){
//     if(err){
//         return console.log("error getting a client from pool", err);
//     }

//     client.query("SELECT * FROM foodgroups", function(err,result){
//         done(); //release client connection back to the pool

//         if(err){
//             return console.log("There was an error running the query", err);
//         }

//         console.log(result.rows);
//     });
// });

var client = new pg.Client(conString);

client.connect(function(err){
    if(err){
        return console.log("error connecting", err);
    }

    client.query("INSERT INTO foodgroups VALUES (7, 'test group', 'test description')", function(err, result){
        if(err){
            return console.error("There was an error inserting the row", err);
        }

        console.log(result);
        client.end();
    })
});