var fs = require('fs')

fs.stat("summer.html",function(err,stat){
    if(err) throw err
    console.log(stat.isFile);
    console.log(stat.atime);
    console.log(stat.isDirectory);
})