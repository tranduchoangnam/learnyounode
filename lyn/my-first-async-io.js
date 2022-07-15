const fs = require('fs');
var a=process.argv,array=undefined;

function test(callback){
    fs.readFile(a[2],'utf8',function done(err,ftext){
        array=ftext.split("\n");
        callback();
    })
}
function print(){
    console.log(array.length-1);
}
test(print)