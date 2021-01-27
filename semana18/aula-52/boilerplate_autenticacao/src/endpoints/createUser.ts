import { Request, Response } from "express";
import {insertUser} from "../data/insertUser";
import { generate } from "../service/idGenerator";
import { generateToken } from "../service/authenticator";
import { generateHash } from "../service/hashManager";
import { USER_ROLES } from "../types/user";

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

        if (
            req.body.role !== USER_ROLES.ADMIN &&
            req.body.role !== USER_ROLES.NORMAL
         ) {
            throw new Error(`"role" deve ser "NORMAL" ou "ADMIN"`)
         }

        const id: string = generate();
        const cypherPassword: string = generateHash(req.body.password)

        await insertUser(
            id,
            req.body.name,
            req.body.nickname,
            req.body.email,
            cypherPassword,
            req.body.role
        );

        const token = generateToken({
            id: id, 
            role: req.body.role
        });

        res
            .status(200)
            .send({message:"Usuário cadastrado com sucesso", token});

    } catch (error) {
        res.status(400).send({
            message: error.message || error.sqlMessage
        })
    }
}