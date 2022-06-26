import database from '../../database'

export default async function deleteProductService (id) {
 
     try {
 
             const res = await database.query(`
                  DELETE FROM products WHERE id = $1 RETURNING *
             `, [id])

             return {
               message: "Product deleted",
               product: res.rows[0]
          }
 
     } catch (error) {
 
          throw new Error(error)
 
     }
};