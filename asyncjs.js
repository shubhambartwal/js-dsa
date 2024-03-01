const fs=require("fs")
//filesystem
fs.readFile("a.txt","utf-8",function(err,data){
console.log(data)
})
console.log('main file')//this is print first ,fs is a async function
