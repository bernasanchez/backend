//Agregar productos: productsForm
let productsForm = document.getElementById('productsForm');
const handleSubmit = (evt, form, route) => {
    evt.preventDefault(); 
    let formData = new FormData(form); 
    let obj = {};
    formData.forEach((value,key) => obj[key]=value);
    fetch(route, {
        method:'POST',
        body: JSON.stringify(obj),
        headers:{
            'Content-Type':'application/json'
        }
    }).then(res=>res.json()).then(json=>console.log(json));
}
productsForm.addEventListener('submit',(e)=>handleSubmit(e, e.target, '/api/products')); 

//Actualizar productos: updateForm
let updateForm = document.getElementById('updateForm');
const updateSubmit = (evt, form, route) => {
    evt.preventDefault(); 
    let formData = new FormData(form); 
    let obj = {};
    formData.forEach((value,key) => obj[key]=value);
    fetch(route, {
        method:'PUT',
        body: JSON.stringify(obj),
        headers:{
            'Content-Type':'application/json'
        }
    }).then(res=>res.json()).then(json=>console.log(json));
}
updateForm.addEventListener('submit',(e)=>updateSubmit(e, e.target, '/api/products')); 

//Eliminar productos: deleteForm
let deleteForm = document.getElementById('deleteForm');
const deleteSubmit = (evt, form, route) => {
    evt.preventDefault(); 
    let formData = new FormData(form); 
    let obj = {};
    formData.forEach((value,key) => obj[key]=value);
    fetch(route, {
        method:'DELETE',
        body: JSON.stringify(obj),
        headers:{
            'Content-Type':'application/json'
        }
    }).then(res=>res.json()).then(json=>console.log(json));
}
deleteForm.addEventListener('submit',(e)=>deleteSubmit(e, e.target, '/api/products')); 