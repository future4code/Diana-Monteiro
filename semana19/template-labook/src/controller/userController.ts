import { Request, Response } from "express";
import { businessLogin, businessSignup } from "../business/userBussiness";
import { signupInputDTO } from "../data/model/userModel"

export const signup = async (req: Request, res: Response): Promise<void> => {
  try {
    const input: signupInputDTO = {
      name: req.body.name,
      password: req.body.password,
      email: req.body.email,
    };

    const token = await businessSignup(input);

    res.status(201).send({ message: "Created user!", token });
  } catch (error) {
   res.status(error.statusCode || 400).send(error.message)
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    const user = await businessLogin(email, password)

    res.status(200).send({ message:"Logged user!", user });
  } catch (error) {
   res.status(400).send(error.message)
  }
};
