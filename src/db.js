import mongoose from "mongoose";



export const connectDB = ()=> {
    try {
        mongoose.connect('mongodb://127.0.0.1/merncrud')
        console.log("DB connected");
    } catch (error) {
        console.log(error);
    }
}