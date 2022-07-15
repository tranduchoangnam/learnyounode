const http = require('http');
const bl = require('bl')
for (let i=2;i<=4;i++){
    http.get(process.argv[i], function (res){
        res.pipe(bl(function(err,data){
            if(err) return console.error(err)
            data=data.toString()
            console.log(data)
        }))

    })
}
