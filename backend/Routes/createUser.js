import express from "express";
import User from "../models/User.js"
import {body,validationResult} from "express-validator"
import bcrypt from "bcrypt"
import jwt from'jsonwebtoken'

const jwtSecret="eyJhbGciOiJIUzI1NiJ9.eyJSb2xlIjoiQWRtaW4iLCJJc3N1ZXIiOiJJc3N1ZXIiLCJVc2VybmFtZSI6IkphdmFJblVzZSIsImV4cCI6MTcyMjE0OTYzMywiaWF0IjoxNzIyMTQ5NjMzfQ.bzPY4f127ioMY5_k4vcH1Xd7l5lzWW8oJPDxso5aNdw"


const router=express.Router();


router.post("/createuser",
body("name").isLength({min:3}),
body("email").isEmail().optional(),
  body("password").isLength({min:5}).optional(),
  async(req,res)=>{
    try{
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        const errors= validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json( {errors: errors.array()} )
        }
        await User.create({
            name:req.body.name,
            email:req.body.email,
            password:hashedPassword,
            location:req.body.location
      }).then(res.json({success:true}));

    }catch(error){
        console.log(error);
        res.json({success:false})
    }
})


router.post("/loginuser",
body("email").isEmail(),
body("password").isLength({min:5}),
// body("password").custom( (value,{req})=>{
//   return value===req.body.password;
// }),
   async(req,res)=>{
    let email=req.body.email;
    try{
        let userData=await User.findOne({email});
        if(!userData){
            return res.status(400).json({errors:"Try logging with correct email"})
        }
        const pwdCompare=await bcrypt.compare(req.body.password,userData.password)
        if(!pwdCompare){
            return res.status(400).json({errors:"Try logging with correct password"})
        }
        const data={ 
            user:{
                id:userData.id
            }
        }
        const authToken=jwt.sign(data,jwtSecret);
        return res.json({success:true,authToken:authToken})

    } catch(error){
        console.log(error);
        res.json({success:false})
    }
}
)

export default router;