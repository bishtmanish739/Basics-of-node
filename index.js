// what is package.json and npm init 
// package.json is a file which track all node module used in out project
// it is most important file in our project
// how to recover node.module file => using npm install command 
//nodemon is a package is used to save project and run our server contineously 

const fs=require("fs");
const http=require("http");
const c=require("colors");
const { inherits } = require("util");

console.log("Hello world".blue);
console.log("I am color module in node".red)
fs.writeFileSync("hello.txt","Hello this is node first class");

http.createServer((req,res)=>{
   
    res.write("<h1>Hello welcome to node first class</h1>");
    
    res.end();
}).listen(4500);