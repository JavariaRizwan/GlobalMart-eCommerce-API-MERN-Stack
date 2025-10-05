const User=require("../schemas/user-schema");
const bcrypt=require("bcrypt");

const registerUser=async(requestAnimationFrame, res)=>{
try {
    
const user=await User.create(req.body);
if(user){
    res.status(200).send("The user was successfully registered");
}
else{
    res.status(500).send("Error occured while registering the user!");
}

} catch (error) {
        res.status(500).send("Error occured while registering the user", error.message);
}
}

const login=async(req,res)=>{
try {
    const{email}=req.body;
const user=await User.find(req.body);
if(user){
    localStorage.setItem(JSON.parse(email));
    res.status(200).send("Login successful");
}

    
} catch (error) {
        res.status(500).send("Error occured while logging in the user", error.message);
}
}

module.exports={registerUser, login}