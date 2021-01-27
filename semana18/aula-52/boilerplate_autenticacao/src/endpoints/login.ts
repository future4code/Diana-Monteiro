import { Request, Response } from "express";
import { selectUserByEmail } from "../data/selectUserByEmail";
import { generateToken } from "../service/authenticator";
import { compare } from "../service/hashManager";

export const login = async (req: Request, res: Response) => {
  try {
    const input: loginInput = {
      email: req.body.email,
      password: req.body.password,
    };

    if (!input.email || !input.password) {
      throw new Error("Por favor, preencha todos os campos.");
    }

    // B. Validação do email
    if (!req.body.email || req.body.email.indexOf("@") === -1) {
      throw new Error("Email inválido");
    }

    const user = await selectUserByEmail(input.email);

    if (!user) {
      throw new Error("Usuário não encontrado!");
    }

    const passwordIsCorrect: boolean = compare(input.password, user.password);

    if (!passwordIsCorrect) {
      throw new Error("Senha incorreta.");
    }

    const token = generateToken({
      id: user.id,
      role: user.role,
    });
    res.status(200).send(token);
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};

export type loginInput = {
  email: string;
  password: string;
};
