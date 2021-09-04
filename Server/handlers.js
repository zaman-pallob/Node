const url = require('url');

const routes = require('./Routes/Routes');

const handlers = {};

handlers.requestHandlers = (request, response) => {
    const parsedUrl = url.parse(request.url, true);
    const path = parsedUrl.pathname;
    const queryObject = parsedUrl.query;
    const trimmedPath = path.replace(/^\/+|\/+$/g, '');
    const headersObject = request.headers;
    const method = request.method.toLowerCase();

    const requestProperties = { parsedUrl, path, queryObject, trimmedPath, headersObject, method };

     choosenHandlers = routes[trimmedPath];
    console.log(choosenHandlers.toString());

    // choosenHandlers(requestProperties, (statusCode, payload) => {
       
    //     response.end(JSON.stringify(payload));
    // });
};

module.exports = handlers;
