var sql = require('mysql')

var con = sql.createConnection({
    host : "localhost",
    user : "root",
    password : "Shinchan@23",
    database : "practice"
})

con.connect((err)=>{
    if(err) throw err
    con.query("Select * from customer",function (err,result) {
        if(err) throw err
        else
        {
            result.forEach((e) => {
                console.log(`name : ${e.name} and age : ${e.age}`);
            });
        }
       con.end() 
    })
})