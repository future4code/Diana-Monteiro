import { connection } from "../index";
import { searchUserInput } from "../types/searchUserInput";

export async function selectUsers(
  orderBy: string,
  orderType: string,
  page: string,
  key?: string,
  value?: string
): Promise<any> {
  const resultsPerPage: number = 5;
  const pageNumber: number = Number(page);
  const offset: number = resultsPerPage * (pageNumber - 1);

  const result = await connection("aula48_exercicio")
    .select("*")
    .from("aula48_exercicio")
    .where(`${key}`, "LIKE", `${value ? value : "%"}`)
    .orderBy(orderBy, orderType)
    .limit(resultsPerPage)
    .offset(offset);

  return;
}
