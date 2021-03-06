import { Request, Response } from "express";
import {insertUser} from "../data/insertUser";
import {insertAddress} from "../data/insertAdress"
import { generate } from "../service/idGenerator";
import { generateToken } from "../service/authenticator";
import { generateHash } from "../service/hashManager";
import { USER_ROLES } from "../types/user";
import { address } from "../types/address";
import {getAddressByCep} from "../service/addresManager"

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

         //geração id
        const id: string = generate();
        const addressId: string = generate();

        //senha criptografada
        const cypherPassword: string = generateHash(req.body.password)

        const dataCep: address = await getAddressByCep(req.body.cep)

        await insertUser(
            id,
            req.body.name,
            req.body.nickname,
            req.body.email,
            cypherPassword,
            req.body.role
        );

        await insertAddress(
            addressId,
            dataCep.street,
            req.body.number,
            dataCep.neighborhood,
            dataCep.city,
            dataCep.state,
            id,
            req.body.complement
        )

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