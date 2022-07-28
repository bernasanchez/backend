let username; 
const chatBox = document.getElementById('chatBox');

const socket = io({
    autoConnect: false
}); 

Swal.fire({
    title:'Identificate',
    input:'text',
    text:'Ingresa el usuario con el que te identificarás en el chat',
    inputValidator: (value) =>{
        return !value && 'Necesitas identificarte para poder continuar'
    },
    allowOutsideClick: false
}).then(result=>{
    username = result.value;
    socket.connect();
})

//Listener
chatBox.addEventListener('keyup', evt=>{
    if(evt.key==='Enter'){
        if(chatBox.value.trim().length > 0){
            socket.emit('message', {username:username, message: chatBox.value});
            chatBox.value = '';
        }
    }
})

socket.on('log', data=>{
    let log = document.getElementById('log');
    let messages = "";
    data.forEach(message =>{
        messages = messages + `${message.username} dice ${message.message}</br>`
    })
    log.innerHTML = messages; 
})

socket.on('newUser', data=>{
    if(username){
        Swal.fire({
            text:'Nuevo usuario en chat',
            toast:true,
            position:'top-right'
        })
    }
})