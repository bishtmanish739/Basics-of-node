// what is package.json and npm init 
// package.json is a file which track all node module used in out project
// it is most important file in our project
// how to recover node.module file => using npm install command 
//nodemon is a package is used to save project and run our server contineously 
/// this is comment at node api branch 
const data=require("./apidata")
const fs=require("fs");
const http=require("http");
const c=require("colors");
http.createServer((req,res)=>{
   res.writeHead(200,{'Content-Type':'application\json'});
    res.write(JSON.stringify(data));
    
    res.end();
}).listen(4500);