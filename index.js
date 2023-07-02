// const fs=require('fs');
// fs.writeFileSync("hello2.txt","code step by step practice");
// console.log(__dirname);
// console.log(__filename);
// console.log("first")
const http=require('http');
http.createServer((req,res)=>{
    res.write("<h1>Hi this is Parul Sahni server</h1>");
    res.end();

}).listen(3000);