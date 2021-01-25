import { Request, Response } from "express";
import {insertUser} from "../data/insertUser";
import { generate } from "../service/idGenerator";
import { generateToken } from "../service/authenticator";

export const createUser = async (req: Request, res: Response) => {
    try {

        if (!req.body.name || !req.body.nickname) {
          throw new Error('Preencha os campos "name" e "nickname"')
        }

        // B. Validação do email
        if (!req.body.email || req.body.email.indexOf("@") === -1) {
            throw new Error("E-mail inválido");
        }
  
        // C. Validação da senha
        if (!req.body.password || req.body.password.length < 6) {
            throw new Error("Senha Inválida");
        }

        const id: string = generate();

        await insertUser(
            id,
            req.body.name,
            req.body.nickname,
            req.body.email,
            req.body.password
        );

        const token = generateToken(id);

        res
            .status(200)
            .send({message:"Usuário cadastrado com sucesso", token});

    } catch (error) {
        res.status(400).send({
            message: error.message || error.sqlMessage
        })
    }
}