const mongoose=require("mongoose");
const orderSchema= new mongoose.Schema({
   user:
   {
   type: mongoose.Schema.Types.ObjectId,
   ref:"User",
   required:true,
   },
   shippingAddress:{
    type:String,
    required:true,
   },
   isPaid:{
    type:Boolean,
    required:true,
   },
   paymentMethod:{
    type:String,
    enum:["Cash on Delivery", "Credit Card", "Stripe"],
    required:true,
   },
   totalPrice:{
    type:Number,
    required:true,
   },
   orderStatus:{
    type:String,
    enum:["Pending", "Verified","Shipped", "Delivered","Cancelled"],
    default:"Pending",
    required:true
   }
},
   {timestamps:true}
)

const Order=mongoose.model("Order", orderSchema);
module.exports=Order;
