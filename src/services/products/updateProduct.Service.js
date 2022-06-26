import database from "../../database"

export default async function updateProductService(id, newProduct) {

    try {

        const res = await database.query(`
        SELECT * FROM products WHERE id = $1;
   `, [id])

        let query = "UPDATE products SET "

        const keys = Object.keys(newProduct)
        const values = Object.values(newProduct)

        keys.forEach((key, index) => {
            query += `${key} = \$${index+=1}, `
        })

        query = query.slice(0, -2)

        query += `WHERE id = \$${keys.length += 1} RETURNING *`


        const update = await database.query(query, [...values, id])

        return {
            message: "Product updated",
            product: update.rows[0]
       }

    } catch (error) {

        throw new Error(error)

    }
};