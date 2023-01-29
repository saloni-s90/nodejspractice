var MongoClient = require('mongodb').MongoClient

var url = "mongodb://0.0.0.0:27017"

MongoClient.connect(url,function(err,db){
    if(err) throw err
    console.log("Database Created!!");
    db.close()
})
