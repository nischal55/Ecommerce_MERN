//product Model import
const Product = require('../models/productModel')

const getProducts=async(req,res,next)=>{
    res.send(await Product.find())
}

const addProducts = async(req,res,next)=>{
    try{
        let user =req.user.user_id
        let {productName,price,quantity,image,product_desc,category,createdBy}=req.body;
        let product = await Product.create({productName,price,quantity,image,product_desc,category,createdBy:user});
        if(product){
            res.send("success")
        }
    }catch(err){
        next(err)
    }
}

const getProductsById = async(req,res,next)=>{
    try{
        let product_id = req.params.id;
        let product = await Product.findOne({_id:product_id});
        res.send(product)
    }catch(err){
        next(err)
    }
}

const searchProducts = async(req,res,next)=>{
    const searchTerm = req.params.productName;
    try {
        const products = await Product.find({ productName: { $regex: searchTerm, $options:'i'} });
        res.json(products);
      } catch (err) {
        next(err)
      }
}

const filterCategory = async(req,res,next)=>{
    const category = req.params.category;
    try {
        const products = await Product.find({ category: { $regex: category, $options:'i'} });
        res.json(products);
      } catch (err) {
        next(err)
      }
}
module.exports={
    getProducts,
    addProducts,
    getProductsById,
    searchProducts,
    filterCategory
}