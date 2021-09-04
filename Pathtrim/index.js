const http=require("http");
const  url  = require("url");

const App={};

App.config={
    port:3000
}

App.startServer=()=>{
    const server=http.createServer(App.handleResponse);
    server.listen(App.config.port,()=>{});
}

App.handleResponse=(request,response)=>{
  const parsedUrl=url.parse(request.url,true);
  response.end("hello");
  console.log(request.headers);
}

App.startServer();
