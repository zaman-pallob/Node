const math=require("./lib/math");
const http=require("http");
const app={}


app.config={
    port:3000
};
app.myfunction=()=>{
   const server= http.createServer(app.handelResponse);
   server.listen(app.config.port,()=>{

   });
}

app.handelResponse=(req,res)=>{
    let info={
       "personalnfo":{ "name":"Atikur Zaman Pallob",
        "age":27,
        "profession":"Engineer",
        "weight":"60 Kg"},
        "professionalinfo":"hello"

    };

        res.setHeader("Content-Type","application/json");
        res.end(JSON.stringify(info));
   
    

}
app.myfunction();