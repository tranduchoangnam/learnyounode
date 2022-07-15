const mymodule=require('./mymodule.js')
var a=process.argv
var callback=function(err,data){
    if(err) console.log(error)
    else
        data.forEach(element => {
            console.log(element)
        });
}
mymodule(a[2],a[3],callback)

