import database from "../../database"

export default async function deleteCategoryService(id) {

    try {

        const res = await database.query(`
                  DELETE FROM categories WHERE id = $1 RETURNING *;
             `, [id])

        return {
            message: "Category deleted",
            category: res.rows[0]
        }

    } catch (error) {

        throw new Error(error)

    }
};