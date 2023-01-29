var f = require('formidable')
var fs = require('fs')
var h = require('http')

h.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' })
    res.write('<form action ="fileupload" method = "get">')
    res.write('<input type = "file" name = "filetoupload"> <br>')
    res.write('<input type = "submit">')
    res.write('</form>')
    return res.end()
}).listen(7777)
