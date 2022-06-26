import { Router } from "express";
import createProductController from "../controllers/products/createProduct.Controller";
import deleteProductController from "../controllers/products/deleteProduct.Controller";
import listOneProductController from "../controllers/products/listOneProduct.Controller";
import listProductsController from "../controllers/products/listProducts.Controller";
import listProductsByCategoryController from "../controllers/products/listProductsByCategory.Controller";
import updateProductController from "../controllers/products/updateProduct.Controller";


const productsRouter = Router()

//create
productsRouter.post('/', createProductController )

//read 
productsRouter.get('/', listProductsController )
productsRouter.get('/:id', listOneProductController)
productsRouter.get('/category/:id', listProductsByCategoryController)

//update
productsRouter.patch('/:id', updateProductController )

//delete
productsRouter.delete('/:id', deleteProductController)



export default productsRouter