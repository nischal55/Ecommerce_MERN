const User = require('../models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
//@desc
//@Create new user
const createUser = async(req,res,next)=>{
    try{
        let {username,password,email,role,contact}=req.body;
        let matched = false;
        matched = await(User.findOne({username}));
        console.log(matched)
        if(!matched){
            bcrypt.hash(password, 10, async function(err, hash) {
                await User.create({username,password:hash,email,role,contact});
            });
            res.send("success")
        }else{
            res.status(400).send("User Already Exists")
        }
    }catch(err){
        next(err)
    }
}

const getUsers =  async (req,res,next)=>{
    try{
        console.log(req.user.user_id)
        res.send(await User.find());
    }catch(err){
        next(err)
    }
}

const login = async(req,res) =>{
    let input_username=req.body.username;
    let input_password=req.body.password;
       let users= await User.findOne({username:input_username})
       let matched= false;
        if(users){
            matched = await bcrypt.compare(input_password, users.password)
            
            if(matched){
                        users.password =undefined
                        let token = jwt.sign({user_id:users._id,username:users.username},'shhhhh');
                        let access_token = token;
                        res.send({access_token,users})
                    }else{
                        res.status(401).send("Invalid Username or Password")
                    }
                
        }else{
            res.status(401).send("Invalid Username or Password")
        }
}

module.exports={
    createUser,
    getUsers,
    login,
};