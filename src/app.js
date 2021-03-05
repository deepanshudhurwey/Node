const express = require('express')
const mongoose = require('mongoose')
//const usermod = require('../src/models/user')
mongoose.connect('mongodb://127.0.0.1:27017/shopfree',{useNewUrlParser:true},{ useUnifiedTopology: true })

const User = mongoose.model('User', {
    name: {
    type: String
    },
    age: {
    type: Number
    }
   })
const app = express()
app.post('/user',async(req,res)=>{
    try{
        //console.log(req.body)
            
    const me = new User(req.body)
    //const user1 = new usermod(req.body)

    await me.save()
    res.send(me).status(200)
    }
    catch(e)
    {
        res.status(500).send(e)
    }
})
app.get('/user',(req,res)=>{
    res.send('req')
})
app.listen(3001, ()=>{
    console.log('listening to 3001')
})