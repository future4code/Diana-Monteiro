// Database connection
// import { connection } from '../connection/connection'

// export const selectRecipeById = async(id:string): Promise<any> => {
//     try {
//         const result = await connection.raw(`
//         SELECT id, title, description, creation_date, creator_id, name FROM recipe_cookenu rc
//             JOIN user_cookenu uc ON uc.id = rc.id
//             `)
//         .select('*')
//         .where({id})
//         return result[0]
        
//     } catch (error) {
//         throw new Error(error.sqlMessage)
//     }
// }

            // "id": "id da receita",
			// "title": "título da receita",
			// "description": "descrição da receita",
			// "createdAt": "31/12/2020",
			// "userId": "id do usuário que criou a receita",
			// "userName": "nome do usuário que criou a receita"