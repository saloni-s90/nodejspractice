var http = require('http')

var dt = require('./myDateModule')

http.createServer(function(req,res){
    res.write("The current data and time are => " + dt.myDate())
    res.end()
}).listen(8879)
console.log("Server run at 8879...");