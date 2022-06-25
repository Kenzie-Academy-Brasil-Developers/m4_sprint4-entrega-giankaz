import listCategoriesService from "../../services/categories/listCategories.Service"

export default async function listCategoriesController(req, res) {

    try {

        const categories = await listCategoriesService()

        return res.status(200).json(categories)

    } catch (error) {

        throw new Error(error)

    }
};