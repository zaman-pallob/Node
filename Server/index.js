const http= require("http");

const server=http.createServer();
server.on('connection',()=>{
    console.log("New User hit");
});
server.listen(4000);
console.log("Server is running");