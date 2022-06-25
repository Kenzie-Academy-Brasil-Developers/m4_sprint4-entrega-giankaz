import database from "../../database"

export default async function listCategoriesService () {
 
     try {
 
             const res = await database.query(`
                  SELECT * FROM categories;
             `)
 
             return res.rows
     } catch (error) {
 
          throw new Error(error)
 
     }
};