import { connection } from "./config";

export const selectUserByEmail= async(email: string): Promise<any> => {
    const result = await connection
    .select("*")
    .from("User_aula50")
    .where({email});

    return result[0];
}