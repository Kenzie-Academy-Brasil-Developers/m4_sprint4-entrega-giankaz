import updateCategoryService from "../../services/categories/updateCategory.Service"

export default async function updateCategoryController(req, res) {

    try {

        const { id } = req.params
        const newCategorie = req.body

        const updatedCategorie = await updateCategoryService(id, newCategorie)

        return res.status(200).json(updatedCategorie)

    } catch (error) {

        return res.status(400).json({ message: error.message })

    }
};