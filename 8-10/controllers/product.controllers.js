import Product from "../models/product.schema.js";

export const createProduct = async (req, res) => {
    try {
        const { productName,
            productCategory,
            productPrice,
            productQuantity,
            productImage,
         } = req.body.productData;
         const {userId}=req.body;
        if (!productName,
            !productCategory,
            !productPrice,
            !productQuantity,
            !productImage,
            !userId)
            
            {
            return res.status(400).json({ success: false, message: "All fields are mandatory" })
        }
        const newProduct = new Product({
            name: productName,
            price: productPrice,
            quantity: productQuantity,
            image: productImage,
            // createdBy: userId,
            category: productCategory
        });
        await newProduct.save();

        return res.status(200).json({
            success: true,
            message:"Product successfully Saved."
        })
    } catch (error) {
        res.json({ message: error, success: false });
    }
}

export const viewProducts = async (req, res) => {
    try {
        const allProducts=await Product.find({});
        return res.status(200).json({
            success: true,
            allProducts
        })
    } catch (error) {
        res.json({ message: error, success: false });
    }
}

export const singleProductData = async (req, res) => {
    try {
        console.log(req.params,"here")
        const {productId}=req.params;
        if(!productId){
            return res.status(404).json({success:false,message:"Product Id is required"})
        }
        const productData=await Product.findById(productId)
        if(!productData){
            return res.status(404).json({success:false,message:"Product is not found"}) 
        }
        return res.status(200).json({
            success: true,
            productData,
        })
    } catch (error) {
        res.json({ message: error, success: false });
    }
}

export const filterProducts = async (req, res) => {
    try {
        return res.status(200).json({
            success: true,
        })
    } catch (error) {
        res.json({ message: error, success: false });
    }
}

export const sortProducts = async (req, res) => {
    try {
        return res.status(200).json({
            success: true,
        })
    } catch (error) {
        res.json({ message: error, success: false });
    }
}