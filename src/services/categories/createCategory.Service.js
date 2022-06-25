import database from "../../database"

export default async function createCategoryService(name) {

    try {

        const res = await database.query(`
                  INSERT INTO categories (name)
                  VALUES ($1) RETURNING *;
             `, [name])

        return res.rows[0]

    } catch (error) {

        return res.status(404).json({ message: error.message })

    }
};