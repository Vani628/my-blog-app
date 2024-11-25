import mongoose from "mongoose";

export const ConnectDB=async()=>{
    await mongoose.connect('mongodb+srv://vanigupta:vanigupta@cluster0.lk61i.mongodb.net/BlogApp');
    console.log("DB Connected");
}