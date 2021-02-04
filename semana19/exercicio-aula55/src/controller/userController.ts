import { Request, Response } from "express";
import { businessLogin, businessSignup } from "../business/userBusiness";
import { signupInputDTO } from "../business/entities/user";


export const login = async (
   req: Request,
   res: Response
): Promise<void> => {
   try {
      const { email, password } = req.body

      const token = await businessLogin(email, password)

      res.send({
         message: "Usuário logado!",
         token
      })

   } catch (error) {
      res.status(400).send(error.message)
   }
}
export const signup = async (
   req: Request,
   res: Response
) => {
   try {
      const input: signupInputDTO = 
      {
      name: req.body.name,
      nickname: req.body.nickname,
      password: req.body.password,
      role: req.body.role,
      email: req.body.email
   }


      const token = await businessSignup(input)

      res
         .status(201)
         .send({
            message: "Usuário criado!",
            token
         })

   } catch (error) {
      res.status(400).send(error.message)
   }
}