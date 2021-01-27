import { Request, Response } from "express";
import selectUserById from "../data/selectUserById";
import {getTokenData} from "../service/authenticator";
import { deleteUser } from "../data/deleteUserById";

export const deleteUserById = async (req: Request, res: Response) => {
    try {
      const token = req.headers.authorization as string;
  
      const authenticationData = getTokenData(token);
  
      if (authenticationData.role !== "ADMIN") {
        throw new Error("Apenas um usuário ADMIN pode acessar essa funcionlidade.");
      }
  
      const id = req.params.id;
  
      await deleteUser(id);
  
      res.sendStatus(200);
    } catch (err) {
      res.status(400).send({
        message: err.message,
      });
    }
  };