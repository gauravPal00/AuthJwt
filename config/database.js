import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config()

export const Connection = async()=>{
    let URL = process.env.URL;
    try{
       await mongoose.connect(URL,{useNewUrlParser:true,useUnifiedTopology:true})
       console.log("database connected");
    }catch(error){
        console.log("Fail to connect",error);
    }
}