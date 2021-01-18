// Libraries
import { Request, Response } from "express";

// Query functions
import { selectOnlyFive } from "../data/selectOnlyFive";

export const getOnlyFive = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const page = Number(req.query.page as string);

    if (page % 2 !== 0) {
      res.statusCode = 422;
      throw new Error(`"page" deve ser um número positivo`);
    }

    const result = await selectOnlyFive;
    res.status(200).send(result);
  } catch (error) {
    console.log(error);
    res.send(error.message || error.sqlMessage);
  }
};
