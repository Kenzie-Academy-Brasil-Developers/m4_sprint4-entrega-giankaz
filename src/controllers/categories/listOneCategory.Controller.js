import listOneCategoryService from "../../services/categories/listOneCategory.Service"

export default async function listOneCategoryController (req, res) {

    try {

        const { id } = req.params


        const categorie = await listOneCategoryService(id)
     

        return res.status(200).json(categorie)

    } catch (error) {

       return res.status(400).json({ message: error.message })

    }
};