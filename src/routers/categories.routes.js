import { Router } from "express";
import createCategorieController from "../controllers/categories/createCategory.Controller";
import deleteCategorieController from "../controllers/categories/deleteCategory.Controller";
import listCategoriesController from "../controllers/categories/listCategories.Controller";
import listOneCategorieController from "../controllers/categories/listOneCategory.Controller";
import updateCategorieController from "../controllers/categories/updateCategory.Controller";

const categoriesRouter = Router()

//create
categoriesRouter.post('/', createCategorieController)

//read 
categoriesRouter.get('/', listCategoriesController)
categoriesRouter.get('/:id', listOneCategorieController)

//update
categoriesRouter.patch('/:id', updateCategorieController)

//delete
categoriesRouter.delete('/:id', deleteCategorieController)



export default categoriesRouter