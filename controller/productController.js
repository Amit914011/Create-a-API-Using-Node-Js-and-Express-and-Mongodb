const Product = require('../model/Product')

// Get All Product
const product_All=async(req,res)=>{
   try {
    const products=await Product.find()
    res.json(products)
   } catch (error) {
    res.json({message : error})
   }
};

// Single Product
const product_Details=async(req,res)=>{};


// Add Product
const product_Create=async(req,res)=>{};


// Update Product
const product_Update=async(req,res)=>{
    try {
        const product={
            title:req.body.title,
            price:req.body.price,
            image:req.body.image,
            detaills:req.body.detaills
        }
        const updateProduct= await Product.findByIdAndDelete(
            {_id: req.product.productId},product
        )
        res.json(updateProduct)
    } catch (error) {
        res.json({message:error})
    }
};


// Delete Product
const product_Delete=async(req,res)=>{};


module.exports={
    product_All,product_Details,product_Create,product_Update,product_Details
}
