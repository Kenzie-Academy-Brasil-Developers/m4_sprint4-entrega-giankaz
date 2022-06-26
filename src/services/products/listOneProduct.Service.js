import database from "../../database"

export default async function listOneProductService (id) {
 
     try {
 
             const res = await database.query(`
                  SELECT * FROM products WHERE id = $1;
             `, [id])

             return res.rows[0]
 
     } catch (error) {
 
          throw new Error(error)
 
     }
};