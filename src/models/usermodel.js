import mongoose from "mongoose";
import { type } from "os";
const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:[true,"please provide a username"],
        unique:true,
        trim:true,
    },
    email:{
        type: String,
        required:[true,"please provide a email"],

        unique: true,
    },
    password:{
        type:String,
        required:[true,"please provide a password"]
        
    },
    isVerified:{
        type: Boolean,
        default: false,
    },
    isAdmin:{
        type: Boolean,
        default: false,
    },
    forgotPasswordToken: String,
    forgotPasswordTokenExpire: Date,
    verifyToken: String,
    verifyTokenExpiry: Date,

})
const User = mongoose.models.users || mongoose.model
("Users",userSchema);
export default User;