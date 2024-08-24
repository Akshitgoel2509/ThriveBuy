import express from 'express'
import billingDetail from '../models/BillingDetail.js'
import { body } from 'express-validator'

const router=express.Router();


router.post('/billingData',
[
body("name").isLength({min:3}),
body("email").isEmail()],
async(req,res)=>{
    try {
        await billingDetail.create({
            email:req.body.email,
            name:req.body.name,
            location:req.body.location,

        }).then(res.json({success:true}))
    
    } catch (error) {
        console.log(error);
        res.json({success:false})
    }
   
})

export default router;