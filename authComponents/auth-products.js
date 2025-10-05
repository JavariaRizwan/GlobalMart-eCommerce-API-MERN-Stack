const Product=require("../schemas/product-schema");

const viewProduct= async(req, res)=>{
    try {
        const prod= await Product.find();
        if(prod.length>0){
            res.status(200).json(prod);
        }
        else{
            res.status(404).send("No product to show in the catalog!")
        }
        
    } catch (error) {
        res.status(500).send("Error in viewing product", error.message);
    }
}


const addProduct= async(req, res)=>{
try {
    const item=await Product.create(req.body);
    if(item){
        res.status(200).send("Product added successfully!")
    }
    else{
        res.status(404).send("Oops! Something unsusual has happened");
    }
} catch (error) {
    res.status(500).send("Error occured while adding the product", error.message);
}
}

const viewSelectedProduct=async(req, res)=>{
const { id }= req.params.id;
try {
    const selectedItem= await Product.findById(id);
    if(selectedItem){
        res.status(200).json(selectedItem);
    }
    else{
        res.status(404).json({ message: "Product not found!" });
    }
} catch (error) {
    res.status(500).send("Error occured in showing the product", error.message);
}
}

module.exports={viewProduct, addProduct, viewSelectedProduct};