import { connection } from "./config";

export const insertUser = async (id: string, name: string, nickname: string, email: string, password: string ) => {
    await connection
      .insert({
        id,
        name,
        nickname,
        email,
        password,
      })
      .into("User_aula50");
  };