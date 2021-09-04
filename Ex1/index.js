const http = require("http");
const {reqestHandlers}=require("./handlers");
const app={};

app.config={
    port:3000
}
app.createServer=()=>{

const server=http.createServer(reqestHandlers);
server.listen(app.config.port,()=>{});

}


app.createServer();