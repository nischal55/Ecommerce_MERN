const Cart = require('../models/cartModel')

const addCart=async(req,res,next)=>{
    try{
        const {quantity,product_id}=req.body;
        let user_id=req.user.user_id
        let carts = await Cart.create({user_id,quantity,product_id})
        if(carts){
            res.send('success')
        }
    }catch(err){
        next(err)
    }
    
}

const getCart = async(req,res,next)=>{

    try{
        let users = await Cart.find({"user_id": req.user.user_id,"status":"cart"}).populate("product_id")
        res.send(users)
        
    }catch(err){
        next(err)
    }

}

const esewaPayment = async(req,res,next)=>{
    try{
        let result = await Cart.findOneAndUpdate({user_id:req.user.user_id,payment_method:'none'},{status:"pending",payment_method:"Esewa"},{new:true})
        res.send(result);
        
    }catch(err){
        next(err)
    }
    
}

const cashPayment = async(req,res,next)=>{
    try{
        let result = await Cart.findOneAndUpdate({user_id:req.user.user_id,payment_method:'none'},{status:"pending",payment_method:"Cash"},{new:true})
        res.send(result);
        
    }catch(err){
        next(err)
    }
    
}

const delCart = async(req,res,next)=>{
    try{
        let cart_id = req.params.cart_id;
        // let result = await Cart.findOneAndUpdate({user_id:req.user.user_id},{status:"pending",payment_method:"Esewa"},{new:true})
       let result = await Cart.deleteOne({_id:cart_id})
     
            res.send(result);
        
    }catch(err){
        next(err)
    }
    
}

const getOrders = async(req,res,next)=>{
    try{
        let users = await Cart.find({"user_id": req.user.user_id,"status":{"$ne":'cart'}}).populate("product_id")
        res.send(users)
        
    }catch(err){
        next(err)
    }
}
const getOrdersAdmin = async(req,res,next)=>{
    try{
        let users = await Cart.find({"status":{"$ne":'cart'}}).populate("product_id").populate("user_id")
        res.send(users)
        
    }catch(err){
        next(err)
    }
}
const changeDelivery = async(req,res,next)=>{
    let order_id=req.params.order_id;
    try{

        let result = await Cart.findOneAndUpdate({_id:order_id},{status:"InDelivery"},{new:true})
        res.send(result);
        
    }catch(err){
        next(err)
    }
    
}
const changeComplete = async(req,res,next)=>{
    let order_id=req.params.order_id;
    try{

        let result = await Cart.findOneAndUpdate({_id:order_id},{status:"Completed"},{new:true})
        res.send(result);
        
    }catch(err){
        next(err)
    }
    
}



module.exports={
    addCart,
    getCart,
    esewaPayment,
    delCart,
    cashPayment,
    getOrders,
    getOrdersAdmin,
    changeDelivery,
    changeComplete
}