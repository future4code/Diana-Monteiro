import { connection } from "../index"


export async function selectOrderBy(orderBy:string, orderType:string):Promise<any> {
    const result= await connection("aula48_exercicio")
    .select("*")
    .orderBy(orderBy, orderType) 
    return result
}