const Contact={};

Contact.contactHandler=(requestedProperties,callBack)=>{
callBack(200,{
    Name:"Atikur Zaman Pallob",
    method:requestedProperties.method,
    "Age":27,
   
});
}

module.exports=Contact;