const mongoose = require('mongoose')
const bcrypt=require('bcrypt')

const VendorSchema= new mongoose.Schema({
    name:String,
    email:String,
    phone:Number,
    password:String,
    image:String,
    role:String,
    
})
  
  VendorSchema.pre("save", async function () {
    try{
      this.password = await bcrypt.hash(this.password, 12);
    }catch(err){
      console.log(err)
    }
   
  });

const Vendormodel= mongoose.model('vendorData',VendorSchema, "usersData")

module.exports=Vendormodel