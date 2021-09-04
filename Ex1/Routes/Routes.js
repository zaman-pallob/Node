const {aboutHandler}=require("./About");
const {helpHandler}=require("./Help");
const {homeHandler}=require("./Home");
const {contactHandler}=require("./Contact");

routes={
    "/":function my(requestedProperties,callBack) {
        callBack(200,{
            message:"ok"
        });
        
    },
    "/about":aboutHandler,
    "/help":helpHandler,
    "/home":homeHandler,
    "/help/contact":contactHandler,
}

module.exports=routes;