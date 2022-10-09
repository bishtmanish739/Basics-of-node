const fs=require('fs');
const c=require("colors");
const path=require('path');
const dirPath=path.join(__dirname,'files')
console.log(dirPath)
for( i=0;i<5;i++){
    fs.writeFileSync(dirPath+`/hello${i}.txt`,`content ${i}`);
}

fs.readdir(dirPath,(err,files)=>{
    
        console.log(files);
        console.log("One by one".red);
        files.forEach(item=>{
            console.log(item);
        })
    

})