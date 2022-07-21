import express from 'express'; 
import Contenedor from './container/productos.js';

//Instanciamos la clase contenedor para poder usar sus metodos
const productService = new Contenedor();
//Iniciamos Exp para toda la app. No es necesario poner new express(), no es una clase.
const app = express(); 
//Definimos un puerto
const PORT = 8080; 
//Ponemos a "escuchar" nuestro servidor
const server = app.listen(PORT, ()=> {
    console.log(`Listening on PORT ${PORT}`);
})
//Agregamos las rutas para que acceda nuestro servidor y el request-resolve en c/u de ellas
app.get('/', (req, res)=> {
    res.send("Bienvenido a Backend"); 
});

app.get('/productos', async (req, res)=> {
    const products = await productService.getAllProducts(); 
    res.send(products); 
    
    // const result = JSON.stringify(getAllProducts, null,'\t'); 
});

app.get('/productosRandom', async (req, res)=> {
    const products = await productService.getAllProducts(); 
    const idProducts = await products.map((product) => product.id);
    const randomProduct = Math.floor(Math.random() * products.length); 

    
    if(idProducts.includes(randomProduct)){
        res.send(products.find((product) => product.id === randomProduct));
    }else{
        res.send('Vuelve a intentarlo con otro numero. Por favor, recarga la pagina.'); 
    }

});


