const Notfound={};

Notfound.notFoundHandler=(requestedProperties,callBack)=>{
callBack(200,{
    message:"not found"
});
}

module.exports=Notfound;