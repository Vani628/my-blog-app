import mongoose from "mongoose";

export const ConnectDB=async()=>{
    try{
    await mongoose.connect('mongodb+srv://vanigupta:vanigupta@cluster0.lk61i.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
    console.log("DB Connected");
    }
    catch(error){
        console.log(error);
    }
}