import listOneProductService from "../../services/products/listOneProduct.Service"

export default async function listOneProductController (req, res) {
 
     try {
            const {id} = req.params
             const product = await listOneProductService(id)

             return res.status(200).json(product)
 
     } catch (error) {
 
          return res.status(400).json({ message: error.message })
 
     }
};