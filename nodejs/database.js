const mysql = require('mysql')

const conn = mysql.createConnection({
    host : "localhost",
    user : "root",
    password : "Shinchan@23",
    
})

conn.connect(function (err){
    if(err)
    console.log("err ");

    else
    {
        console.log("Connected");
        conn.query("Create database mydb;",function(err,data){
            if (err) throw err
            else
            {
                console.log("create database");
                conn.end()
            }
        })
    }

})
