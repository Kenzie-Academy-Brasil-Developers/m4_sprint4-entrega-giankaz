import listProductsService from "../../services/products/listProducts.Service"

export default async function listProductsController (req, res) {
 
     try {
 
             const products = await listProductsService()

             return res.status(200).json(products)
 
     } catch (error) {
 
          throw new Error(error)
 
     }
};