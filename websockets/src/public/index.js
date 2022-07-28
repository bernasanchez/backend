// console.log('Hola');
const socket = io(); 
const chatbox = document.getElementById('chatbox');
chatbox.addEventListener('keyup', (evt)=>{
    if(evt.key === 'Enter'){
        socket.emit('message', chatbox.value);
        chatbox.value = ""; 
    }
})
socket.on('log', data=>{
    console.log(data); 
})

socket.emit('saludo', 'hola');

//Listeners
socket.on('perros', data=>{
    console.log(data); 
})