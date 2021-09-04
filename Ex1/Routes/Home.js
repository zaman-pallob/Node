const Home={};

Home.homeHandler=(requestedProperties,callBack)=>{
callBack(200,{
    message:"hello from Home"
});
}

module.exports=Home;