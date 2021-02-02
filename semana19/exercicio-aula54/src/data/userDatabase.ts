// Database connection
import { connection } from "./connection";
import { user } from "../business/entities/user";

export const insertUser = async (user: user): Promise<any> => {
  try {
    await connection
      .insert({
        id: user.id,
        name: user.name,
        email: user.email,
        password: user.password,
        role: user.role,
      })
      .into("User_Arq");
  } catch (error) {
    throw new Error(error.sqlMessage);
  }
};

export const selectUserByEmail = async(email: string): Promise<any> => {
  try {

    const result = await connection()
      .select("*")
      .from("User_Arq")
      .where({ email });
    if(!result[0]){
      throw new Error("User not found.");
    }
    return result[0];
  } catch (error) {
    throw new Error(error.sqlMessage || error.message);
  }
}

export const selectAllUsers = async(): Promise<any> => {
  try {
      const result = await connection
      .select("*")
      .from("User_Arq")
      
      return result
      
  } catch (error) {
      throw new Error(error.sqlMessage)
  }
}

export const deleteUser = async(id:string): Promise<any> => {
  try {
      const result = await connection
      .delete("*")
      .where({id})
      .from("User_Arq")
      
      return result
      
  } catch (error) {
      throw new Error(error.sqlMessage)
  }
}