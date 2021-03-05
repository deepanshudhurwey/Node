const express = require('express')
const User = require('../models/user')
const mongoose = require('mongoose')
const hbs = require('hbs')
const router = require('express').Router();
const bodyParser = require('body-parser'); 
const auth = require('../middleeware/auth')// Middleware

//post users
router.post('/users', async (req, res) => {
    const user = new User(req.body)
    try {
        await user.save()
        const token = await user.generateAuthToken()
        res.status(201).send(user)        
    } catch (e) {
        res.status(400).send(e)
    }
})                   
//get users list
router.get('/users', async(req,res)=>{
    try{
        const user = await User.find()
        res.send(user).status(200)
    }
    catch(e)
    {
        res.status(500).send(user)
    }
})
//post /login 
router.post('/login', async(req,res)=>{
    try{
       // console.log(req.body.email, req.body.password)
        const user = await User.findByCredentials( req.body.email,req.body.password)
       // console.log('user-->',user)
        const token = await user.generateAuthToken()
       // console.log('token-->',token)
        res.status(200).send({user,token})             
    }catch(e){
        res.send(e).status(500)
    }
})
//get me/profile
router.get('/me', auth, async(req,res)=>{
    try{
    res.send(req.user).status(200)
    }
    catch(e){
        res.status(500).send(e)
    }
})
module.exports = router