 import express from "express";
 import mongodb from "./mongodb.js"
 import createUser from "../Routes/createUser.js"
import billingData from "../Routes/billingData.js";
 mongodb();
 const app=express();
 const port=4000;

 app.use((req,res,next)=>{
   res.setHeader("Access-Control-Allow-Origin","http://localhost:5173");
   res.header(
     "Access-Control-Allow-Headers",
     "Origin, X-Requested-With,Accept,content-type,Authorization",
   );
   next();
 })

 app.get('/', (req, res) => {   
   res.send('Hello World!')
 })

 app.use(express.json());
 app.use('/api',createUser)
 app.use('/api',billingData)



 app.listen(port,()=>{
    console.log(`Server running on port ${port}`)
 })