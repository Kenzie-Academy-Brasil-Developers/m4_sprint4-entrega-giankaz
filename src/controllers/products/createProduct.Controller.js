import createProductService from "../../services/products/createProduct.Service"

export default async function createProductController (req, res) {
 
     try {
 
             const productData = req.body

             const creatingProduct = await createProductService(productData)

             return res.status(201).json(creatingProduct)
             
 
     } catch (error) {
 
          return res.status(400).json({ message: error.message })
 
     }
};