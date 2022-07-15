const net = require('net')  
function zerofill(time){
    return time>=10?time:"0"+time
}
let date=new Date()
let day=zerofill(date.getDate())
let month=zerofill(date.getMonth()+1)
let hour=zerofill(date.getHours())
let min=zerofill(date.getMinutes())
let full=date.getFullYear()+"-"+month+"-"+day+" "+hour+":"+min
const server = net.createServer(function (socket) {  

    
    socket.write(full)
    socket.end("\n")
})  
server.listen(process.argv[2]) 


