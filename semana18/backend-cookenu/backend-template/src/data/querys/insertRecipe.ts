// Database connection
import { connection } from '../connection/connection'

//Type
import { recipe } from "../../types/recipe"

export const insertRecipe = async(recipe: recipe): Promise<any> => {
    try {
        await connection
        .insert({
            id: recipe.id,
            title: recipe.title,
            description: recipe.description,
            creation_date: recipe.creation_date,
            creator_id: recipe.creator_id
          })
          .into("recipes_cookenu")        
    } catch (error) {
        throw new Error(error.sqlMessage)
    }
}
