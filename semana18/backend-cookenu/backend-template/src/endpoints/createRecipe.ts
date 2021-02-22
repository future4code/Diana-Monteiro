// Types from Express.js library
import { Request, Response } from "express";

// Database function
import { insertRecipe } from "../data/querys/insertRecipe";

//Type
import { recipe } from "../types/recipe";

// Services
import {verifyString, verifyBodyKeys} from "../services/validators";
import { generateId } from "../services/idGenerator";
import { getTokenData } from "../services/authenticator";
const { date } = require('../services/dateFunction');

export const createRecipe = async (req: Request, res: Response): Promise<any> => {
   const validKeys = ["title", "description"];

  try {
    res.statusCode = 422;
    verifyBodyKeys(req.body, validKeys);
    verifyString(req.body);

    const token = req.headers.authorization as string;
    const authenticationData = getTokenData(token);

    const createDate = date(Date.now())

    const id: string = generateId();

    const newRecipe: recipe = {
      id: id,
      title: req.body.title,
      description: req.body.description,
      creation_date: createDate,
      creator_id: authenticationData.id,
    };
    await insertRecipe(newRecipe);

    res.status(200).send({ message: "Recipe created sucessfully"});
  } catch (error) {
    res.send(error.message || error.sqlMessage);
  }
};
