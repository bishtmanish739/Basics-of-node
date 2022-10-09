//we have a process object and we can get data from console using process object
//process contain argument vector argv array 
const c=require("colors")
const fs=require("fs");
console.log(process);
console.log(process.argv);
console.log(process.argv[2]);
const operation=process.argv[2];
const filename=process.argv[3];
if(operation==="add"){
    
    const filecontent=process.argv[4];
    fs.writeFileSync(filename,filecontent);
    console.log("File added".green);
}
else if(operation==="delete"){
    fs.unlinkSync(filename);
    console.log(filename," File deleted".red);

}
else{
    console.log("Invalid Input".red);
}
