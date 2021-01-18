import { connection } from "../index"


export async function selectOrderBy(orderBy:string):Promise<any> {
    const result= await connection("aula48_exercicio")
    .select("*")
    .orderBy(orderBy) 
    return result
}