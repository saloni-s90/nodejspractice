var fs = require('fs')

var h = require('http')

h.createServer(function (req, res) {
    fs.readFile('file.txt', function (err, data) {
        if (err) throw err
        res.writeHead(200, { 'Content-Type': 'text/html' })
        res.write(data)
        return res.end()
    })
    fs.appendFile('file.txt', 'wow what a beautiful webpage', function (err) {
        if (err) throw err
        console.log("updated!!");
    })
}).listen(9999)
