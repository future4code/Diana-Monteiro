import { Request, Response } from "express";
import { selectUserByEmail } from "../data/selectUserByEmail";
import { generateToken } from "../service/authenticator";

export const login = async (req: Request, res: Response) => {

    try {

        const input: loginInput = {
            email: req.body.email,
            password: req.body.password
        }

        if(!input.email || !input.password){
            throw new Error("Por favor, preencha todos os campos.");
        }

        // B. Validação do email
        if (!req.body.email || req.body.email.indexOf("@") === -1) {
            throw new Error("Email inválido");
        }

        const user = await selectUserByEmail(input.email);

        if(!user){
            throw new Error("Usuário não encontrado!");
        }

        if(user.password !== input.password){
            throw new Error("Senha incorreta.");
        }

        const token = generateToken(user.id);
        res.status(200).send({token:"token gerado pelo jwt"});

    } catch (error) {
        res.status(400).send({message: error.message});
    }


}

export type loginInput = {
    email: string,
    password: string
}