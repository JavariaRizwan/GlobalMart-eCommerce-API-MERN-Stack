const mongoose=require("mongoose");
const connect = async()=>{
    try {
    const con=await mongoose.connect(`mongodb://localhost:27017/nexus_ai`);
    console.log("Connection was successful.");    
    } catch (error) {
        console.log("❌ Error connecting to MongoDB:", error.message)
    }
}
module.exports=connect;