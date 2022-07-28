import express from "express";
import __dirname from "./utils.js";
import handlebars from 'express-handlebars';
import viewsRouter from "./routes/views.router.js";
import productsRouter from "./routes/productsRouter.js"
import Contenedor from "./container/products.js";

const app = express();
const server = app.listen(8080, ()=>console.log('Listening PORT 8080')); 

app.use(express.static(__dirname + '/public')); 

//Template Engine Config: permite ejecutar el motor de plantillas
app.engine('handlebars', handlebars.engine());
app.set('views', __dirname + '/views');//Mi carpeta de vistas cuansdo rendericemos,  va a estar donde especifiquemos
app.set('view engine', 'handlebars'); //la relacion de las vistas con el motor, va a ser HB 

app.use(express.json());
app.use('/', viewsRouter); 
app.use('/api/products', productsRouter)

