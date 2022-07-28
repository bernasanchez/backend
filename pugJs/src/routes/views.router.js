import { Router } from "express";
import Contenedor from "../container/products.js";
const router = Router();
const productService = new Contenedor();

router.get('/', (req,res)=>{
    res.render('welcome.pug', {
        message: 'Bienvenido a Pug'
    })
})

router.get('/newProduct', (req,res)=>{
    res.render('newProduct.pug'); 
});

router.get('/products', async(req,res)=>{
    let products = await productService.getAllProducts();
    res.render('products', {
        products,
        hasProducts: products.length > 0,
    })
});

export default router;