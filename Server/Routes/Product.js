const product={};


product.productHandlers=(requestedProperties,callBack)=>{
    callBack(200,{
        message:"this is product"
    });
}


module.exports=product;