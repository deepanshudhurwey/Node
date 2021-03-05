const mongoose = require('mongoose')
const User = require('./user')
const sopschema = mongoose.Schema({
    sopname :{
        type : String,
        required : true,
        trim : true
    },
    description :{
        type : String
    },
    owner :{
        type : mongoose.Schema.Types.ObjectId,
        required : true,
        ref : User
    }
})

const Sop = mongoose.model('Sop', sopschema)
module.exports = Sop