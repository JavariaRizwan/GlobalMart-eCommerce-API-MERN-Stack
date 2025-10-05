const mongoose=require("mongoose");
require("dotenv").config();

const connect = async()=>{
    try {
    const con=await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connection was successful.");    
    } catch (error) {
        console.log("❌ Error connecting to MongoDB:", error.message)
    }
}
module.exports=connect;
