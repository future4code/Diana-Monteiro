import { connection } from "./config";
import { USER_ROLES } from "../types/user";

export const insertUser = async (id: string, name: string, nickname: string, email: string, password: string, role:USER_ROLES) => {
    await connection
      .insert({
        id,
        name,
        nickname,
        email,
        password,
        role
      })
      .into("User_aula50");
  };