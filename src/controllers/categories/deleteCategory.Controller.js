import deleteCategoryService from "../../services/categories/deleteCategory.Service"

export default async function deleteCategoryController (req, res) {
 
     try {
 
             const {id} = req.params

             const deletedUser = await deleteCategoryService(id)

             return res.status(200).json(deletedUser)
 
     } catch (error) {
 
          return res.status(400).json({ message: error.message })
 
     }
};