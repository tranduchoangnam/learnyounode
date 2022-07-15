const fs=require('fs')
const http = require('http')


const server=http.createServer((req,res)=>{
    var reader=fs.createReadStream(process.argv[3])
    reader.setEncoding('utf8')
    reader.pipe(res)
  
})
server.listen(process.argv[2])