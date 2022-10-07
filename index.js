const fs=require("fs");
const http=require("http");

console.log("Hello world");
fs.writeFileSync("hello.txt","Hello this is node first class");

http.createServer((req,res)=>{
   
    res.write("<h1>Hello welcome to node first class</h1>");
    
    res.end();
}).listen(4500);