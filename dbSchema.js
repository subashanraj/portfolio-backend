const mongoose= require("mongoose")
const validator=require("validator")

var userSchema=new mongoose.Schema({
    firstName:{type:'string',required:true},
    lastName:{type:'string',required:true},
    email:{
        type:"string",
        required:true,
        lowercase:true,
        validate:(value)=>{
            return validator.isEmail(value)
        }
    },
    phone:{type:'string',default:'0000-00-000'},
    message:{type:"string"},
    createdAt:{type:Date,default:Date.now}
})
const UserDetails= mongoose.model("users",userSchema)
module.exports={UserDetails}
   