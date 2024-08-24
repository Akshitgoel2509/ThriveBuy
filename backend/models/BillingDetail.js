import mongoose from "mongoose";

const {Schema}=mongoose;

const BillingDetail=new Schema({
    
    email: {type:String , required:true},
    name: {type: String, required: true},
    location: {type: String ,required:true},
   
})

export default mongoose.model('BillingDetail',BillingDetail);