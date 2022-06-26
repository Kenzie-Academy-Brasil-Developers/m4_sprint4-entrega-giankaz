import database from "../../database"

export default async function listProductsService () {
 
     try {
 
             const res = await database.query(`
                  SELECT * FROM products;
             `)

             return res.rows
 
     } catch (error) {
 
          throw new Error(error)
 
     }
};