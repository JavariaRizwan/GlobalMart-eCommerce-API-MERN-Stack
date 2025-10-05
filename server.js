
const express=require('express');
const app=express();
const router=require('./router/user-router');
const connect=require("./connectionDB/connectDB");

app.use(express.json());

app.use('/home', router)

const PORT=5000;

connect().then(()=>{
app.listen(PORT, ()=>{ 
console.log(`Server is running on port ${PORT}`);
})
})