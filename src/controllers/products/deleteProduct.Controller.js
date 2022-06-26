import deleteProductService from "../../services/products/deleteProduct.Service"

export default async function deleteProductController (req, res) {
 
     try {
 
             const {id} = req.params
             const deleteProduct = await deleteProductService(id)

             return res.status(204).json(deleteProduct)
 
     } catch (error) {
 
          return res.status(400).json({ message: error.message })
 
     }
};