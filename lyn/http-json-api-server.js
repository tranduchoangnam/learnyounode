const http = require('http') 
const url=require('url') 
var time=function(date){
    return{
        hour:date.getHours(),
        minute:date.getMinutes(),
        second:date.getSeconds()
    }
}
var unix=function(date){
    return{
        unixtime:date.getTime()
    }
}

var init=function(url){
    if(url.pathname=='/api/parsetime')
        return time(new Date(url.query.iso))
    if(url.pathname=='/api/unixtime')
        return unix(new Date(url.query.iso))
}
const server = http.createServer(function (req,res) {  
    if(req.method=='GET'){
        purl=url.parse(req.url,true)
        res.end(JSON.stringify(init(purl)))
    }
})  
server.listen(process.argv[2]) 


