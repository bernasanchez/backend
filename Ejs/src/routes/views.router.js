import { Router } from "express";
import Contenedor from "../container/products.js";
const router = Router();
const productService = new Contenedor();

router.get('/newProduct', (req,res)=>{
    res.render('newProduct'); 
});

router.get('/products', async(req,res)=>{
    let products = await productService.getAllProducts();
    res.render('products', {
        products,
        hasProducts: products.length > 0,
    })
});

export default router;