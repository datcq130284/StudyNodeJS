console.log("Connecting To A MSSQL Database");

var sql = require('mssql');
var config = {
    user: 'root',
    password: 'dc130284',
    server: 'localhost',
    database: 'mydemodb',
    options:{
        instanceName: 'DEMOSQLEXPRESS'
    }
}

var connection = new sql.Connection(config, function(err){
    if(err) throw err;

    var request = new sql.Request(connection);
    request.query("select * from fd_groups", function(err, recordset){
        if(err) throw err;

        console.dir(recordset);
    })
});

var ps = new sql.PreparedStatement(connection);
ps.input('name', sql.VarChar(50));
ps.input('description', sql.VarChar(50));

ps.prepare('insert into fd_groups (name,description) values(@name,@description)', function(err){
    if(err) throw err;

    ps.execute({
        name: 'testFoodgroup',
        description: 'descriptionFoodgroup'
    }, function(err,result){
        if(err) throw err;
        
        console.log(result);
    })
})