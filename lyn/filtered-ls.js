const fs=require('fs')
var input=process.argv
let path=input[2],extension=input[3]
fs.readdir(path,function (err,list){
    list.forEach(files => {
        if (files.length>extension.length)
            if(files.substring(files.length-extension.length,files.length)==extension)
                console.log(files);
        
    });
})


