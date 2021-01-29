// Types from Express.js library
import { Request, Response } from "express";

// Database function
import { insertUser } from "../data/querys/insertUser";

//Type
import { user, USER_ROLES } from "../types/user";

// Services
import {
  verifyEmail,
  verifyString,
  verifyLength,
} from "../services/validators";
import { generateId } from "../services/idGenerator";
import { generateToken } from "../services/authenticator";
import { generateHash } from "../services/hashManager";

export const createUser = async (req: Request, res: Response): Promise<any> => {
  try {
    res.statusCode = 422;

    if (!req.body.name || !req.body.email || !req.body.password) {
      throw new Error('Fill in the "name", "email" and "password" fields.');
    }

    verifyString(req.body);
    verifyEmail(req.body.email);
    verifyLength(req.body.password, "Password", 6);

    if (req.body.role) {
      const role = req.body.role.toUpperCase()
      console.log(role)
      if (
        role !== USER_ROLES.ADMIN &&
        role !== USER_ROLES.NORMAL
      ) {
        throw new Error(`"role" deve ser "NORMAL" ou "ADMIN"`);
      }
    }

    const id: string = generateId();
    const cypherPassword: string = generateHash(req.body.password);

    const newUser: user = {
      id: id,
      name: req.body.name,
      email: req.body.email,
      password: cypherPassword,
      role: req.body.role,
    };
    await insertUser(newUser);

    const token = generateToken({ id: id, role: req.body.role });

    res.status(200).send({ message: "User created sucessfully", token: token });
  } catch (error) {
    res.send(error.message || error.sqlMessage);
  }
};
