const fs = require('fs');
var a=process.argv;

const buf=fs.readFileSync(a[2]);
const str = buf.toString();
const array=str.split("\n");
console.log(array.length-1);