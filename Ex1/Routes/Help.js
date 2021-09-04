const Help={};

Help.helpHandler=(requestedProperties,callBack)=>{
callBack(200,{
    message:"hello from Help"
});
}

module.exports=Help;