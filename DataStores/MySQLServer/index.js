console.log("Connecting To A MySQL Server");

var mysql = require('mysql');
var _ = require('underscore');

var connection = mysql.createConnection({
    user: 'root',
    password: 'dc130284',
    database: 'mydemodb',
    host: 'localhost',
    port: '3306'
});

connection.connect(function(err){
    if(err){
        throw new Error('Could not connect to db');
    }
});

// var queryString = "SELECT * FROM foodgroups";
// connection.query(queryString,function(err, rows, fields){
//     if(err){
//         throw new Error('Error performing query');
//     }

//     _.each(rows, function(row){
//         console.log(row.id, row.name, row.description);
//     });
// });

var insertString = "INSERT INTO foodgroups SET ? ";
var insertObject = { name: 'testFoodGroupName', description: 'testFoodGroupDescription'}
var queryString = mysql.format(insertString, insertObject);

var query = connection.query(queryString, function(err,result){
    if(err){
        throw new Error('Error performing insert');
    }

    console.log(result);
});

console.log(query.sql);

connection.end(function(err){
    console.log("connection ended");
})