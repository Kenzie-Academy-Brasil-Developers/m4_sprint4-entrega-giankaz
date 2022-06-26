import database from "../../database"

export default async function listProductsByCategoryService (id) {
 
     try {
 
             const res = await database.query(`
             SELECT p.id, p.name, p.price, c.name AS category FROM products p
             JOIN categories c ON p.category_id = c.id
              WHERE p.category_id = $1
                     ;       
             `, [id])

             return res.rows
 
     } catch (error) {
 
          throw new Error(error)
 
     }
};