const jwt = require('jsonwebtoken');
const checkAuthentication = (req,res,next)=>{
    try{
        let token = req.headers.authorization.replaceAll?.('Bearer ','');
        if(token){
            const decodedUser = jwt.verify(token,"shhhhh");
            req.user = decodedUser
            return next();
        }else{
            return res.status(401).send({
                msg:"Not Authorized"
            })
        }
    }catch(err){
        next(err)
    }
}

module.exports=checkAuthentication