import mongoose from "mongoose";
import validator from "validator";
import bcrypt from 'bcryptjs' 
const UserSchema = new mongoose.Schema({
    name:{type:String, required: [true, 'please provide your name'],

    minlength: 3,
    maxlength:25,
    trim: true,
},
email :{
    type:String, required: [true, 'please provide your email'],

    // unique:true,
    validate:{
        validator: validator.isEmail,
        message:'please provide a valid email'  
    },
    unique:true,
},
password:{type:String, required: [true, 'please provide your password'],

    minlength: 3,
    
},
lastName:{type:String, 

    minlength: 3,
    maxlength:25,
   default : 'last name '
},
location:{type:String, 


    maxlength:25,
    trim: true,
    default : 'my city'
}
})
UserSchema.pre('save', async function(){
    const salt = await bcrypt.genSalt(10);
    this.password =await bcrypt.hash(this.password, salt)
})

export default mongoose.model('User', UserSchema)