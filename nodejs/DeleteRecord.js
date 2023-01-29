var sql = require('mysql')

var con = sql.createConnection({
    host : "localhost",
    user: "root",
    password : "Shinchan@23",
    database : "practice"
})

con.connect((err) => {
    if(err) throw err
    var sql = "delete from customer where age = 18;"
    con.query(sql,(err,result) => {
        if(err) throw err
        console.log(" Number of record deleted: "+result.affectedRows);
    })
})