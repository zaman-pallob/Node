const { request } = require("http");
const url=require("url");
const routes=require("./Routes/Routes");
const {notFoundHandler}=require("./Routes/NotFound");
const handlers={};

handlers.reqestHandlers=(request,response)=>{
    var parsedUrl=url.parse(request.url,true);
    var pathName=parsedUrl.pathname;
    var headerObject=request.headers;
    var method=request.method.toLowerCase();
    var requestedProperties={
        parsedUrl,
        pathName,
        headerObject,
        method
    }

    const chosenHandler=routes[pathName]?routes[pathName]:notFoundHandler;

    chosenHandler(requestedProperties,(statusCode,payLoad)=>{
        
        response.end(JSON.stringify(payLoad));
    });

}

module.exports=handlers;