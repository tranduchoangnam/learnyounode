const http = require('http');

var inp=process.argv
http.get(inp[2],function callback(res){
    res.setEncoding('utf8')
    var data=[];
    res.on('data',function(temp){
        data.push(temp);
    })
    res.on('end',()=>{
        data.forEach(element => {
            console.log(element)
        });
    })
})
