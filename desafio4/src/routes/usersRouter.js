import { Router } from "express";//Importamos el Router de express
const router = Router(); //Inicializamos el router 

//Todas las rutas dentro del Router: NO NECESITAN LA RUTA BASE(/users)
//Ya esta implícita porque la definimos a la BASE en app.
router.get('/', (req, res)=> {
    res.send('users'); 
});

router.post('/', (req, res)=> {

});


router.put('/', (req, res)=> {

});


router.delete('/', (req, res)=> {

})



export default router;