import Product from "../models/product.schema.js";

export const createProduct = async (req, res) => {
    try {
        console.log("Request Body:", req.body); // Debugging log

        const {
            productName,
            productQuantity,
            productPrice,
            productImage,
            productCategory,
        } = req.body.productData;

        const { userId } = req.body;

        if (!productName || !productQuantity || !productImage || !productCategory || !userId || !productPrice) {
            return res.status(400).json({ success: false, message: "All fields are required" });
        }

        const newProduct = new Product({
            name: productName,
            price: productPrice,
            quantity: productQuantity,
            image: productImage,
            category: productCategory,
            createdBy: userId,
        });

        await newProduct.save();
        return res.status(200).json({ success: true, message: "Product saved successfully" });
    } catch (error) {
        console.error("Error in createProduct:", error); // Detailed error log
        return res.status(500).json({ success: false, message: error.message || "Server error" });
    }
};

//view all products
export const viewProducts = async (req, res) => {
    try {
        const allProducts=await Product.find({});
        return res.status(200).json({
            success: true,
            allProducts
        })
    } catch (error) {
        res.status(500).json({ message: error.message||"server error", success: false });
    }
}

//single product
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
        res.status(500).json({ message: error.message||"server error", success: false });
    }
}

export const filterProducts = async (req, res) => {
    try {
        const { category } = req.body;
        let query = {};
        if (category) {
          query = { category: category };
        }
        const products = await Product.find(query);
        return res.status(200).json({ success: true, products });
      } catch (error) {
        return res
          .status(500)
          .json({ success: false, message: error.message || "Server error" });
      }
}

export const sortProducts = async (req, res) => {
    try {
        const { sortMethod } = req.body;
        let sortQuery = {};
        if (sortMethod == "lowToHigh") {
          sortQuery = {
            price: 1,
          };
        } else if (sortMethod === "highToLow") {
          sortQuery = {
            price: -1,
          };
        } else if (sortMethod === "newArrivals") {
          sortQuery = { createdAt: -1 }; // Sort by creation date (most recent first)
        }
        console.log(sortQuery, "Sorting Price");
        const products = await Product.find({}).sort(sortQuery);
        return res.status(200).json({ success: true, products });
      } catch (error) {
        return res
          .status(500)
          .json({ success: false, message: error.message || "Server error" });
      }
}
export const testingOperators = async(req,res)=>{
    try{
    // const products = await Product.find({price : {$eq :450}})
    // const products = await Product.find({price : {$ne :450}})
    // const products = await Product.find({price : {$gt :450}})
    // const products = await Product.find({price : {$gte :450}})
    // const products = await Product.find({price : {$lt :450}})
    // const products = await Product.find({price : {$lte :450}})
    // const products = await Product.find({price : {$in :[1200,40,300]}})
    // const products = await Product.find({price : {$nin :[1200,40,300]}})
    // const products = await Product.find({price : {$exists :true}})
    const {minLimit,maxLimit}=req.body
    // const products = await Product.find({$and: [{price:{$gt: 400}},{price:{$lt:2000}}]})
    // const products = await Product.find({$and: [{price:{$gt: minLimit}},{price:{$lt:maxLimit}}]})
    // const products = await Product.find({$or: [{price:{$gt: minLimit}},{price:{$lt:maxLimit}}]})
    // const products = await Product.find({price : {$not:{$gt:350}}})
    // const products = await Product.find({$nor: [{price:{$gt:350}},{price:{$gte:350}}]})
    const products = await Product.find({price:{$type:"number"}}) 
    return res.status(200).json({success : true, products})
    }catch(error){
      return res
      .status(500)
      .json({ success: false, message: error.message || "Server error" });
    }
    }