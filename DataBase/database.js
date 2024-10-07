import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const URI = process.env.MONGODB_URI;

const connectDB = async ()=>{
    try {
        await mongoose.connect(URI).then(()=>{
            console.log("DB Connected Successfully");
        });
    } catch (error) {
        console.log(error);
        process.exit(0);
    }
}




export {connectDB};