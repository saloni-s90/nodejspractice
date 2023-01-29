var event = require('events')
const eventEmit = new event.EventEmitter();

const connecthandler = function connected()
{
    console.log("Connection Established");
    eventEmit.emit("data_received")
}

eventEmit.on("connection",connecthandler)

eventEmit.on(
    'data_received',function(){
        console.log("Data Transfer Successfully");
})
eventEmit.emit("connection")
console.log("Finish");
