import express from "express";
import productsRouter from './routes/productsRouter.js'; 
// import usersRouter from './routes/usersRouter.js'; //Importamos nuestra ruta base

const app = express(); 
const server = app.listen(8080, ()=>console.log('Listening on PORT 8080'));

// app.use('/users', usersRouter); //Como relacionamos users con app? con app.use y colocamos la ruta base + nuestro archivo js donde estan alojadas las rutas (userRouter)
app.use(express.json());
app.use(express.static('public')); 
app.use('/api/products',productsRouter); 



