// Database connection
import { connection } from '../connection/connection'

export const selectUserById = async(id:string): Promise<any> => {
    try {
        const result = await connection("user_cookenu")
        .select('*')
        .where({id})
        return result[0]
        
    } catch (error) {
        throw new Error(error.sqlMessage)
    }
}
