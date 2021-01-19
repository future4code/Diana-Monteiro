// Libraries
import { Request, Response } from "express";

// Query functions
import { selectOrderBy } from "../data/selectOrderBy";
import { order } from "../types/order";

export const getOrderBy = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { orderBy, orderType = "ASC" } = req.query as order;

    if (!orderBy.length) {
      res.statusCode = 404;
      throw new Error("No recipes found");
    }

    if (orderBy !== "name" && orderBy !== "type") {
      res.statusCode = 422;
      throw new Error(`Valores válidos para "orderBy" são "name" e "type"`);
    }

    if (orderType !== "ASC" && orderType !== "DESC") {
      res.statusCode = 422;
      throw new Error(`Valores válidos para "orderType" são "ASC" e "DESC"`);
    }

    const result = await selectOrderBy(orderBy, orderType);
    res.status(200).send(result);
  } catch (error) {
    console.log(error);
    res.send(error.message || error.sqlMessage);
  }
};
