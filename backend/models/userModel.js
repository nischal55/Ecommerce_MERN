const mongoose = require('mongoose')
const Schema = mongoose.Schema;


const userSchema = new Schema({
  username: {type:String, required:true},
  password: {type:String,required:true},
  email: {type:String, required:true},
  role: {type:String, required: true},
  contact : {type:String, required:true}

});

const User = mongoose.model('users',userSchema);
module.exports=User;