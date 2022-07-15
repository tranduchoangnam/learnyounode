var a=process.argv
let len=a.length;
var sum=0;
for (let i = 2; i < len; i++) {
    sum+=Number(a[i])
}
console.log(sum)