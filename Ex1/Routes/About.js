const About={};

About.aboutHandler=(requestedProperties,callBack)=>{
callBack(200,{
    message:"hello from about"
});
}

module.exports=About;