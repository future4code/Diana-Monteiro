import { connection } from "./config";

export const deleteUser = async (id: string): Promise<any> => {
    await connection
      .delete()
      .from("User_aula50")
      .where({ id });
  }