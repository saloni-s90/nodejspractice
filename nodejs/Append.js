var fs = require('fs')

//readFile() : only for readFile

// var h = require('http')
// h.createServer(function(req,res){
//     fs.readFile('summer.html',function(err,data){
//         res.writeHead(200,{'Content-Type':'text/html'})
//         res.write(data)
//         return res.end()
//     }) 
// }).listen(8080)

//open() : to open file
// fs.open('file.txt','r',function(err,data){
//     if (err) throw err
//     console.log("Saved");
// })

//appendFile() : add in that file
// fs.appendFile('file.txt','This is next text',function(err)
// {
//     if(err) throw err
//     console.log("appended file Saved!!");
// })

//writeFile() : write in that file create new file
// fs.writeFile('demo.txt','this is my text',function(err){
//     if(err) throw err
//     console.log("Replaced!");
// })

//unlink() : delete the file
// fs.unlink('demo.txt',function(err){
//     if(err) throw err
//     console.log('File is deleted!!')
// })

//rename()
// fs.rename('file.txt','myFile.txt',function(err){
//     if(err) throw err
//     console.log("file renamed");
// })

var h = require('http')
h.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/html'})
    fs.readFile('file.txt',function(err,data){
        res.write(data.toString())
        fs.appendFile('demo.txt',data,function(err){
            if(err) 
                res.write("erroe found")
            else
                res.write("<br>writing operation is done...")
        })
    })
}).listen(9898)
console.log("Server started at 9898");
