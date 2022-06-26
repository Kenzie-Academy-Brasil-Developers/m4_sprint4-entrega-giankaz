import database from "../../database"

export default async function createProductService({ name, price, category_id }) {

     try {

 /*          const checkCategoryExists = await database.query(`
          SELECT id FROM categories WHERE name = $1
          `, [category])

          if (!checkCategoryExists.rows[0]) {

               const addingCategory = await database.query(`
               INSERT INTO categories (name)
               VALUES ($1);
               `, [category])

          }
 */
          const res = await database.query(`
          INSERT INTO products (name, price, category_id)
          VALUES ($1, $2, (SELECT id FROM categories WHERE id = $3))
          RETURNING *;
          `, [name, price, category_id])
          
          return {
               message: "Product created",
               product: res.rows[0]
          }
    
     } catch (error) {

          throw new Error(error)

     }
};  


//(SELECT id FROM categories WHERE name = $3)