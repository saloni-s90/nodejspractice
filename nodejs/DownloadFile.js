var express = require('express')

var app = express()
var port = 3000

app.get('/',function(req,res){
    res.download("file.txt")
})

app.listen(port,(err)=>{
    if(err) throw err
    console.log("Server Listening... at 3000");
})