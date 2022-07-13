import fs from 'fs';

const path = "src/files/productos.json"
export default class Contenedor{ //Clase contendora(gestiona muchas instancias)
    getAllProducts = async() => {
        try {
            if(fs.existsSync(path)){ //Validamos con un metodo sinc si existe el archivo
                let dataProducts = await fs.promises.readFile(path, 'utf-8');
                let products = JSON.parse(dataProducts); //Parseamos la data para obtener un arreglo de productos.
                return products;  
            }else{
                return []; //Si no existe, devolvemos un array vacío(usuario no debe saber que no existe).Ej, "no hay productos"
            }
        } catch (error) {
            console.log('No se encontro el archivo', error); 
        }
    }

    //Necesitamos los products con los que vamos a trabajar
    addProducts = async(product) => {
        try {
            let products = await this.getAllProducts();//Reutilizamos el método ya que no es necesario repetir todo el proceso nuevamente
            if(products.length === 0){ //Si el array de P, está vacio..
                product.id = 1; //El primer P debe tener un id = 1. 
                products.push(product); 
                await fs.promises.writeFile(path, JSON.stringify(products, null,'\t'));//Luego del push, escribimos nuestro archivo de products, con nuestros P creados. 
            }else{
                product.id = products[products.length-1].id+1; //Accedemos al ultimo producto del array y a su id le sumamos 1(nos asegura que no se repita el id)
                products.push(product); 
                await fs.promises.writeFile(path, JSON.stringify(products, null,'\t'));
            }
        } catch (error) {
            console.log('Error en AddProducts:', error); 
        }  
    }

    getById = async(id) => {
        try {
            let products = await this.getAllProducts();
            let productId = products.find((product)=> {
                if(id == product.id){
                    return product;
                }else{
                    return null
                }
            });
            console.log('Tu producto encontrado es:', productId); 
            // if(id === id){
            //     let productId = products.find(product => product.id === id); 
            //     console.log(productId);
            //     return productId; 
            // }else{
            //     console.log('Su producto no se ha encontrado');
            // }   
        } catch (error) {
            console.log('Error en getById:', error); 
        }
    }

    deleteById = async(id) => {
        try {
            let products = await this.getAllProducts(); 
            let deleteObject = products.filter((product) => {
               if(id != product.id){
                    return product
               }else{
                    return null
               }
            });
            const newArray =  await fs.promises.writeFile(path, JSON.stringify(deleteObject, null, '\t'));
            console.log('Producto eliminado');
            return newArray; 
            
        } catch (error) {   
            console.log('Error en deleteById:', error);
        }
    }

    deleteAll = async() => {
        try {
            
            await fs.promises.writeFile(path, '[]');

        } catch (error) {
            console.log('Error en deleteAll', error); 
            
        }
    }

}

 