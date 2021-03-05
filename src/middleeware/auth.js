const jwt = require('jsonwebtoken')
const User = require('../models/user')

const auth = async(req,res, next)=>{
    try{
        const token = req.header('Authorization').replace('Bearer ','')
        console.log(token)
        const decodedToekn = jwt.verify(token,'SecretKey')
        console.log(decodedToekn)
        const user = await User.findOne({ _id: decodedToekn, 'tokens.token' : token})
        if(!user){
            return new console.error('not match');
        }
        req.token = token,
        req.user = user
        next()
        }
catch(e){
    res.send('no match').status(401)
}
}
module.exports= auth