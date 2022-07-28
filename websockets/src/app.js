import express from 'express';
import __dirname from './utils.js';
import {Server, Socket} from 'socket.io'; 

const app = express();
const server = app.listen(8080, ()=>console.log('Listening on PORT 8080'));
const io = new Server(server); 

app.use(express.static(__dirname + '/public')); 

io.on('connection', socket =>{
    //socket representa el socket cliente que se haya conectado
    //Cuerpo de eventos de SOCKET
    //TODO SOCKET SE BASA EN .on(escuchar evento) y .emit(emitir/enviar el evento)
    //socket.emit : envia solo al socket conectado
    //io.emit envia a TODOS LOS SOCKETS conectados
    console.log('cliente conectado en socket', socket.id);
    socket.on('saludo', data =>{
        socket.emit('perros', ['perro1', 'perro2']);
        // console.log(data);
    })

    socket.on('message', data=>{
        console.log(data); 
        io.emit('log', `${socket.id} dice ${data}`); //reditigimos el mensaje al front
    })
})