import updateProductService from "../../services/products/updateProduct.Service"

export default async function updateProductController (req, res) {
 
     try {
 
             const {id} = req.params
             const newData = req.body
             const updatingProduct = await updateProductService(id, newData)

             return res.status(200).json(updatingProduct)
 
     } catch (error) {
 
          return res.status(400).json({ message: error.message })
 
     }
};