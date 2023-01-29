var h = require('http')

h.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/html'})
    res.write("hello welcome !!!")
    res.end()
}).listen(8868)
console.log("Server started at 8868");