const router = require('express').Router()
const sop = require('../models/sops')
const auth  = require('../middleeware/auth')
router.post('/sops', auth ,async(req,res)=>{
    const Sop = new sop({
        ...req.body,
    owner : req.user._id
    })
    console.log(Sop)
    try{
        await Sop.save()
        res.status(200).send(Sop)
    }
    catch(e)
    {
        res.status(500).send(e)
    }
})

router.get('/sops',auth, async(req,res)=>{
    try{
        const sops = await sop.find({owner:req.user._id})
        res.status(200).send(sops)
    }
    catch(e){
        res.status(500).send(e)
    }
})

router.get('/sops/:id', auth, async(req,res)=>{
    try{
        const sop = await sop.findone({ id, owner:req.user._id})
        res.send(sop).status(200)
    }
    catch(e){
        res.status(500).send(e)
    }
})
module.exports = router