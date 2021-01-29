// Database connection
import { connection } from "../connection/connection";

//Type
import { user } from "../../types/user";

export const insertUser = async (user: user) => {
  try {
    await connection
      .insert({
        id: user.id,
        name: user.name,
        email: user.email,
        password: user.password,
        role: user.role
      })
      .into("user_cookenu");
  } catch (error) {
    throw new Error(error.sqlMessage);
  }
};
