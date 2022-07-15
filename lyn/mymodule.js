const fs=require('fs')
const path=require('path')

module.exports=function (dirPath,extension,callback){
    fs.readdir(dirPath,function(err,data){
        if (err)
            return callback(err)
        else{
            data=data.filter(function(file){
                if (path.extname(file) == '.'+extension) {return true}
            })
            return callback(null,data)
        }
    })
}



