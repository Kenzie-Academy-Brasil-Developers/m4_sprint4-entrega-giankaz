import database from "../../database"

export default async function createCategoryService(name) {

    try {

        const res = await database.query(`
                  INSERT INTO categories (name)
                  VALUES ($1) RETURNING *;
             `, [name])


        if (!res.rows) {
            throw new Error
        }
             
        return {
            message: "Category created",
            category: res.rows[0]
        }

    } catch (error) {

        throw new Error(error)

    }
};