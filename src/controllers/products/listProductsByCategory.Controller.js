import listProductsByCategoryService from "../../services/products/listProductsByCategory.Service"

export default async function listProductsByCategoryController (req, res) {
 
     try {
 
             const {id} = req.params

             const getProducts = await listProductsByCategoryService(id)

             return res.status(200).json(getProducts)
 
     } catch (error) {
 
          throw new Error(error)
 
     }
};