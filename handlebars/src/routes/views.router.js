import { Router } from "express";
import Contenedor from "../container/products.js";
const router = Router(); 
const productService = new Contenedor();

router.get('/', (req, res)=>{
    //res.render renderiza la vista(en el front) a partir del motor de plantillas configurado en app
    //res.send envia info pero no la muestra
    res.render('welcome') //renderizamos la plantila welcome.handlebars
});

//Ruta para mostrar los productos nuevos
router.get('/newProduct', (req, res)=>{ 
    //let users = await usersManager.getAll(); 
    res.render('newProduct');
})

router.get('/products', async(req,res)=>{
    let products = await productService.getAllProducts();
    res.render('products', {
        products, 
        hasProducts: products.length > 0,
    })
})


export default router;