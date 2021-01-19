// Libraries
import { Request, Response } from "express";

// Query functions
import { selectUsers } from "../data/selectUsers";

//Types
import { searchUserInput } from "../types/searchUserInput";

export const getUsers = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const {
      name,
      type,
      orderBy = "name",
      orderType = "ASC",
      page = "1",
    } = req.query as searchUserInput;
    

    let key: string = "name"
    if(!name) {key = "type"}

    if (orderBy !== "name" && orderBy !== "type") {
      res.statusCode = 422;
      throw new Error(`Valores válidos para "orderBy" são "name" e "type"`);
    }

    if (orderType !== "ASC" && orderType !== "DESC") {
      res.statusCode = 422;
      throw new Error(`Valores válidos para "orderType" são "ASC" e "DESC"`);
    }

    const users = await selectUsers(
        orderBy,
        orderType,
        page,
        key,
        name || type
    )
    res.status(200).send(users);
  } catch (error) {
    console.log(error);
    res.send(error.message || error.sqlMessage);
  }
};
