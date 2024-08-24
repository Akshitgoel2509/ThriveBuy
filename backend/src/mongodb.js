import mongoose from "mongoose";

const mongoURL='mongodb+srv://goelakshit253:p4nGX5VhwXH4ZC@cluster0.mwtjo9f.mongodb.net/thrive?retryWrites=true&w=majority&appName=Cluster0'

const mongodb=async()=>{
  try{
     mongoose.connect(mongoURL);
      console.log("connected to MongoDB");
    }
    catch(err){
      console.log(err);
    }
  }
    
    export default mongodb;