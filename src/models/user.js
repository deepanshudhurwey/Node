const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const userschema = new mongoose.Schema({
    name: {
        type: String,
        trim: true
    },
    email: {
        type: String,
        unique: true,
        required: true,
        trim: true,
        lowercase: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Email is invalid')
            }
        }
    },
    password: {
        type: String,
        required: true,
        minlength: 7,
        trim: true,
        validate(value) {
            if (value.toLowerCase().includes('password')) {
                throw new Error('Password cannot contain "password"')
            }
        }
    },
    age: {
        type: Number,
        default: 0,
        validate(value) {
            if (value < 0) {
                throw new Error('Age must be a postive number')
            }
        }
    },
    address :{
        type : String
    },
    tokens: [{
        token: {
            type: String
        }
    }],
    avatar: {
        type: Buffer
    }
}, {
    timestamps: true
})
userschema.virtual('sops', {
    ref: 'sops',
    localField: '_id',
    foreignField: 'owner'
   })
userschema.statics.findByCredentials = async (email, password) => {
    const user = await User.findOne({ email })
    //console.log(user)
    if (user === null) {
    console.log( new Error('Unable to login'))
    }
    const isMatch = await bcrypt.compare(password, user.password)
    if (!isMatch) {
    console.log( new Error('Unable to login'))
    }
    console.log(user)
    return user
   }
userschema.methods.generateAuthToken = async function(){
    const user = this
    //console.log('user2',user)
    //console.log(user._id.toString())
    const token = jwt.sign({ _id: user._id.toString() },'SecretKey',{expiresIn : '3 days'})
    //console.log('token',token)
    user.tokens = user.tokens.concat({token})
    await user.save()
    //console.log(user.tokens)
    return token
}
userschema.pre('save', async function (next) {
    const user = this
    if (user.isModified('password')) {
        user.password = await bcrypt.hash(user.password, 8)
    }
    next()
   })

const User = mongoose.model('User',userschema)
module.exports =  User
