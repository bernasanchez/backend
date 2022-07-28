import { Router } from "express";
import Contenedor from '../container/products.js';
import { uploader } from "../utils.js";

const router = Router();
const productService = new Contenedor();

router.post('/',uploader.single('image'),async(req,res)=>{
    const {title, price} = req.body;
    if(!req.file) res.status(500).send({status:'error', error:' Error en multer:carga de img'})
    if(!title||!price) return res.status(400).send({status:'error', error:' Error en productRouter'});
    let product = {
        title,
        price, 
        image:req.file.filename
    }
    await productService.addProducts(product);
    res.send({status:'success', message:'Product created'});
})

export default router;



