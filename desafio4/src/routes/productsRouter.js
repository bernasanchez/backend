import { Router } from "express";
import Contenedor from '../container/productos.js';
const fileProducts = '../files/productos.json'; 
const router = Router(); 
const productService = new Contenedor(); //Importamos la clase para usar sus métodos
const productsArray = []; 

//Get a ruta raiz para obtener todos los productos
router.get('/', async (req, res)=> {
    const products = await productService.getAllProducts(); 
    res.send(products); 
    // console.log('Productos en raiz', products); 
    // res.send('Bienvenido al desafio4'); 
    
});

//Get con ruta raiz + id para devolver 1 producto segun su id. 
router.get('/:id',  (req, res)=> {
    const products =  productService.getAllProducts();
    // console.log('Prod desde getId',products)
    const {id} = req.params;
    const productId = productService.getById(parseInt(id), fileProducts); 
    if ( req.params.id > products.length){
        res.send({message: 'No se encontro un producto con ese Id', id}); 
    }else{
        res.send({product_id: id, producto: productId})
    }
    
});

//Post en 'api/productos' para agregar productos al json
router.post('/', async (req, res)=> {
    let product = req.body;
    res.send({status:'success', message:'product added'});
    await productService.addProducts(product); 
    console.log('Producto Agregado:', product); 
    // productsArray.push(product);
    // console.log('Products desde post', productsArray); 
    // console.log(productsArray.length); 
});

//Put en 'api/productos' para actualizar productos en el json
router.put('/', async (req, res)=> {
  let product = req.body;
  await productService.updateProduct(product);
  console.log('Producto Actualizado:', product);  

});

//Delete en 'api/productos' para actualizar productos en el json
router.delete('/', async (req, res)=> {
    let id = req.body;
    res.send('Producto eliminado');
    await productService.deleteById(id.id);
    console.log('Producto eliminado:', id); 

})
export default router; 
