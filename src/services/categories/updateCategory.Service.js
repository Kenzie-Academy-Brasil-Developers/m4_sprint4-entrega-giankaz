import database from "../../database"


export default async function updateCategoryService(id, newCategorie) {

    try {

        const res = await database.query(`
             SELECT * FROM categories WHERE id = $1;
        `, [id])

        const categorie = res.rows[0]

        const updatedCategorie = { ...categorie, ...newCategorie }

        const update = await database.query(`
             UPDATE categories  SET name = $1 WHERE id = $2 RETURNING *;
        `, [updatedCategorie.name, id])

        return update.rows[0]

    } catch (error) {

        throw new Error(error)

    }
};