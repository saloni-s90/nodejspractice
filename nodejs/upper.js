var uc = require('upper-case')

var h = require('http')

h.createServer(function(req,res){
    res.writeHead(200,{'Content-Type' : 'text/html'})
    res.write(uc.upperCase("india is my country and i love india"))
    res.end()
}).listen(8878)
console.log("Server Started at 8878.....");
