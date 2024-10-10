import User from "../DataBase/Schema/user.schema.js";
import passwordHash from "password-hash";
import jwt from "jsonwebtoken";
export default class UserController{
    static login = async (req,res)=>{
        const {systemid,usertype,password} = req.body;
        try {  
            const user = await User.findOne({systemid});
            if(!user){
                return res.status(404).json({message:"User not found/Register First"});
            }
            const isMatch = await passwordHash.verify(password,user.password);
            if(!isMatch){
                return res.status(401).json({message:"Invalid password"});
            }
            if(usertype !== user.usertype){
                return res.status(401).json({message:"Invalid user type"});
            }
            const token = jwt.sign({systemid,usertype},process.env.JWT_SECRET);
            const userData ={ id:user._id,name:user.name,systemid:user.systemid,usertype:user.usertype}

            return res.status(200).json({message:"Login Successfully",token,userData});
        } catch (error) {
            console.log("error",error);
           return res.status(500).json({message:"Something went wrong!"});
        }
    }
    static signup = async (req,res)=>{
        const {name,systemid,password,usertype} = req.body;
        try {
            const user = await User.findOne({systemid});
            if(user){
                return res.status(400).json({message:"User already exists/Login Instead"});
            }
            const hashedPassword = passwordHash.generate(password);
            const newUser = new User({name,systemid,password:hashedPassword,usertype});
            await newUser.save();
            return res.status(200).json({message:"Signup successfully!"});
        } catch (error) {
            return res.status(500).json({message:"Something went wrong!"});
        }
    }
}