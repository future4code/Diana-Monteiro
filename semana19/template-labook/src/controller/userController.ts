import { Request, Response } from "express";
import userBusiness from "../business/userBusiness";
import { signupInputDTO, loginInputDTO } from "../data/model/userModel";

class UserController {
  public signup = async (req: Request, res: Response): Promise<void> => {
    try {
      const input: signupInputDTO = {
        name: req.body.name,
        password: req.body.password,
        email: req.body.email,
      };

      const token = await userBusiness.businessSignup(input);

      res.status(201).send({ message: "User created!", token });
    } catch (error) {
      res.status(error.statusCode || 400).send(error.message);
    }
  };

  public login = async (req: Request, res: Response) => {
    try {
      const input: loginInputDTO = {
        email: req.body.email,
        password: req.body.password,
      };

      const user = await userBusiness.businessLogin(input);

      res.status(200).send({ message: "User logged!", user });
    } catch (error) {
      res.status(400).send(error.message);
    }
  };
}

export default new UserController()