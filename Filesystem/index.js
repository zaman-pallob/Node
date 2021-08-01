var r=require("fs");
r.writeFileSync("myfile.txt","This is some text to be written");
r.appendFileSync("myfile.txt"," this one is another text");
r.readFile("myfile.txt",(err,data)=>{
console.log(data.toString());
});
console.log("hello");