import { Router } from "express";
import createProductController from "../controllers/products/createProduct.Controller";


const productsRouter = Router()

//create
productsRouter.post('/', createProductController )

//read 
productsRouter.get('/', )
productsRouter.get('/:id', )

//update
productsRouter.patch('/:id', )

//delete
productsRouter.delete('/:id', )



export default productsRouter