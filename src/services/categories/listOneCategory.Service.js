import database from "../../database"

export default async function listOneCategoryService (id) {

 
     try {
 
             const res = await database.query(`
                  SELECT * FROM categories WHERE id = $1;
             `, [id])

             return res.rows[0]
 
     } catch (error) {
 
          throw new Error(error)
 
     }
};