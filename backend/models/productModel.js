const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const productSchema = new Schema({
  productName: {type:String, required:true},
  price: {type:Number,required:true},
  quantity: {type:Number, required:true},
  image: {type:String, required: true},
  product_desc : {type:String, required:true},
  category:{type:String, required:true},
  createdBy:{type:ObjectId,ref:"users",required:true}

});

const Product = mongoose.model('products',productSchema);
module.exports=Product;