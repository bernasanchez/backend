// console.log('nuevo producto');
const productForm = document.getElementById('productForm');

productForm.addEventListener('submit', evt=>{
    evt.preventDefault();
    const formData = new FormData(productForm); 
    fetch('/api/products',{
        method:'POST',
        body:formData
    }).then(result=>result.json()).then(json=>console.log(json)); 
})
