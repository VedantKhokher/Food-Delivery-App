import mongoose from "mongoose";

export const connectDB=async ()=>{
    await mongoose.connect('mongodb+srv://keshavgoyal1107:rkn5W7TRaYtAlye3@cluster0.rfssd71.mongodb.net/foodApp').then(()=>console.log("DB connected"));

}