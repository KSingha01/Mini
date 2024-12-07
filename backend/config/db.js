import mongoose from "mongoose";

export const connectDB=async()=>{
    await mongoose.connect('mongodb+srv://singhakunal:mtShsSZxh0qfYUHi@cluster0.vd8pa.mongodb.net/food-pre').then(()=>console.log("DB Connected"));
}