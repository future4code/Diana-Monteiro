// Libraries
import { Request, Response } from "express";

// Query functions
import { selectOrderBy } from "../data/selectOrderBy";

export const getOrderBy = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const orderBy = req.query.orderBy as string;

    if (!orderBy.length) {
      res.statusCode = 404;
      throw new Error("No recipes found");
    }

    if (orderBy !== "name" && orderBy !== "type") {
      res.statusCode = 422;
      throw new Error(`Valores válidos para "orderBy" são "name" e "type"`);
    }

    const result = await selectOrderBy(orderBy)
    res.status(200).send(result);
  } catch (error) {
    console.log(error);
    res.send(error.message || error.sqlMessage);
  }
};
