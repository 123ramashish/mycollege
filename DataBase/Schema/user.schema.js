// Given simple user schema
import mongoose from "mongoose";

const User_schema= new mongoose.Schema({
    name:{
        type : String,
        require : true
    },
    systemid : {
        type : String,
        require : true,
        unique : true
    },
    password : {
        type : String,
        require : true
    },
    usertype : {
        type : String,
        require : true,
        default : "student"
    },
    createdAt : {
        type : Date,
        default : Date.now
    },
    updatedAt : {
        type : Date,
        default : Date.now
    }
    

})


const User = new mongoose.model("User",User_schema);

export default User;