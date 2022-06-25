import createCategoryService from "../../services/categories/createCategory.Service"

export default async function createCategoryController (req, res) {
 
     try {
 
             const {name} = req.body

             const creatingCategory = await createCategoryService(name)

             return res.status(201).json(creatingCategory)
 
     } catch (error) {
 
         return res.status(400).json({ message: error.message })
 
     }
}; 