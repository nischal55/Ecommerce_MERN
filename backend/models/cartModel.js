const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const cartSchema = new Schema({
  user_id :{type:ObjectId,ref:"users",required:true},
  quantity:{type:Number,required:true},
  product_id:{type:ObjectId,ref:"products",required:true},
  status:{type:String,default:"cart",required:true},
  payment_method:{type:String,default:"none"}
});

const Cart = mongoose.model('carts',cartSchema);
module.exports=Cart;