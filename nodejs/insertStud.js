var sql = require('mysql')

var con = sql.createConnection({
    host : "localhost",
    user : "root",
    password : "Shinchan@23",
    database : "practice"
})

con.connect(function(err){
    if(err) throw err
    console.log("connected");

    var sql = "Insert into student(name,age) values ?;";
    var val = [['ram',15],['sham',18],['rita',20]]
    con.query(sql,[val],function(err,result){
        if(err) throw err
        console.log("numbers of record inserted : "+val);
    })
})