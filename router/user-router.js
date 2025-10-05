const express=require('express');
const router=express.Router();
const {viewProduct, addProduct, viewSelectedProduct}=require("../auth-component/auth-products");
const {registerUser, login}=require("../auth-component/user-components")



router.get('/', async (req, res)=>{
    res.status(200).send("Welcome to the GlobalMart shop!")
})
router.get('/view-product',viewProduct);
router.get('/view-product/:id',viewSelectedProduct);
router.post('/add-product',addProduct);
router.post('/login',login )
router.post('register-user', registerUser);

module.exports= router;