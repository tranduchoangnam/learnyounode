const http=require('http')
const map=require('through2-map')

var server=http.createServer((req,res)=>{
    if(req.method=='POST')
        req.pipe(map(function (chunk) {  
            return chunk.toString().toUpperCase() 
        })).pipe(res)  
    else res.end(err)
})
server.listen(process.argv[2])
