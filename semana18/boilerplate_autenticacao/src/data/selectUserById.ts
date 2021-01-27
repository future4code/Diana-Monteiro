import { connection } from "./config";


export default async function selectUserById(id: string): Promise<any> {

    const result = await connection('User_aula50')
        .select('*')
        .where({ id })

    return result[0]
}