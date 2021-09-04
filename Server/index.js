const http= require("http");

const {requestHandlers}=require("./handlers");

const app = {};

app.config={
    port:3000
};

app.createServer=()=>{
    const server=http.createServer(requestHandlers);
    server.listen(app.config.port,()=>{});
}

app.createServer();






