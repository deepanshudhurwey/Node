const express = require('express')
const helmet = require('helmet')
const path = require('path')
const hbs = require('hbs')
const cors = require('cors')
const mongoose = require('mongoose')
const fetch = require('node-fetch')
const userrouter = require('../src/routers/user')
const soprouter  = require('../src/routers/sops')
const bodyParser = require('body-parser'); // Middleware
const port = process.env.port || 3001
const publicpath = path.join(__dirname,'/template/views')
const partialpath = path.join(__dirname,'/template/partials')
const public = path.join(__dirname,'../public')
const app = express()
app.use(bodyParser.urlencoded({ extended: false }));
app.set('view engine','hbs')
app.set('views',publicpath)
hbs.registerPartials(partialpath)
app.use(express.json())
app.use(helmet())
app.use(express.static(public))
app.use(express.urlencoded())
app.use(cors())
app.use(soprouter)
app.use(userrouter)

mongoose.connect('mongodb://127.0.0.1:27017/shopfree',{useNewUrlParser:true},{ useUnifiedTopology: true })

app.get('/',(req,res)=>{
    res.render('index',{
        title:"SHOP FREE"
    })
})
app.get('/home',(req,res)=>{
    res.render('index',{
        title:"SHOP FREE"
    })
})
app.get('/about',(req,res)=>{
    res.render('about',{
        test:"test1"
    })
})
app.get('/login',(req,res)=>{
    res.render('login',{
        title:"login Page"
    })
})
app.get('/signup',(req,res)=>{
    res.render('signup',{
    })
})
app.get('/me',(req,res)=>{
    res.render('profile',{
        
    })
})
app.listen(port, ()=>{
    console.log(`Server is running on ${port}`)
})