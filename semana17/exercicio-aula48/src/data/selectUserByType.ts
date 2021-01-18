import { connection } from "../index"

export async function selectUserByType(type: string):Promise<any> {
    const result = await connection("aula48_exercicio")
    .select("*")
    .where("type", type)

    return result
}