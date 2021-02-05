import { BaseDatabase } from "../data/BaseDatabases"
import { user } from "../business/entities/user"

export class UserDatabase extends BaseDatabase{

    tableName = 'labook_users'

    insertUser = async(
        user: user
    ) =>{
        await BaseDatabase.connection(this.tableName)
        .insert({
           id:user.id,
           name: user.name,
           email: user.email,
           password: user.password
        })

    }

    selectUserByEmail = async (
        email: string
     ): Promise<user> => {
  
        console.log(this);
        try {
           const result = await BaseDatabase.connection(this.tableName)
              .select("*")
              .where({ email })
  
           return {
              id: result[0].id,
              name: result[0].name,
              email: result[0].email,
              password: result[0].password,
           }
  
        } catch (error) {
           throw new Error(error.slqMessage || error.message)
        }
     }
}