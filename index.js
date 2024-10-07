import express from "express";
import cors from "cors";
import {connectDB} from "./DataBase/database.js"
import bodyParser from "body-parser";
import userRouter from "./routers/user.router.js";
import dotenv from "dotenv";
dotenv.config();


const app = express();

//middleware
// Applying Cors 
app.use(cors());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
// JSON formatting
app.use(express.json()); // PARSER JSON

// Router
app.use("/api/user",userRouter);


// DataBase Connectivity 
connectDB();


app.listen(process.env.PORT,()=>{
    console.log(`Listening ON port ${process.env.PORT}`);
})
