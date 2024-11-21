import { Router } from "express";
import {
    createProduct,
    viewProducts,
    singleProductData,
    filterProducts,
    sortProducts,
    testingOperators
} from "../controllers/product.controllers.js";
import { checkIsUserValid } from "../middleware/product.middleware.js";

const productRoutes = Router();

productRoutes.post("/create-product",checkIsUserValid, createProduct)
productRoutes.get("/view-products", viewProducts)
productRoutes.get("/single-product/:productId", singleProductData)
productRoutes.post("/filter-products", filterProducts)
productRoutes.post("/sort-products", sortProducts)
productRoutes.post("/testing-operators", testingOperators)

export default productRoutes;