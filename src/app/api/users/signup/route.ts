import {connect} from "@/dbconfig/dbconfig";
import User from "@/models/usermodel";
import bcryptjs from "bcryptjs";
import { NextRequest, NextResponse } from "next/server";

connect()
export async function post(request: NextRequest) {

    try{
const reqbody = await request.json()
const {username, email, password} = reqbody
console.log(reqbody);
//check if user already exists
const user = await User.findOne({email})
if (!username || !email || !password) {
    return NextResponse.json({ error: "All fields are required" }, { status: 400 });
}

//hash password
const salt = await bcryptjs.genSalt(10)
    const hashedPassword = await bcryptjs.hash(password,salt)
     const newUser = new User({
        username,
        email,
        password:hashedPassword
     } )
const savedUser =await newUser.save()
console.log(savedUser);
return NextResponse.json({message:"user created successfully",
    success  :true,
    savedUser

}
    )
    }catch
    (error:any){
        return NextResponse.json({error:error.message},
        {status:500})
    }
}



