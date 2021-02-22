// Types from Express.js library
import { Request, Response } from 'express'

// Database function
import {selectUserByEmail} from '../data/querys/selectUserByEmail'

//Type
import {loginInput} from "../types/loginInput"

// Services
import { verifyBodyKeys, verifyEmail, verifyString } from "../services/validators";
import { generateToken } from "../services/authenticator";
import {compareHash} from "../services/hashManager"

export const login = async (req: Request, res: Response): Promise<any> => {
    const validKeys = ["email", "password"];

    try {
        res.statusCode = 422
        verifyBodyKeys(req.body, validKeys);
        verifyString(req.body);
        verifyEmail(req.body.email);
    
        const input: loginInput = {
            email: req.body.email,
            password: req.body.password
        }

        const user = await selectUserByEmail(input.email)
        if (!user) {
            throw new Error("User not found!");
        }

        const passwordIsCorrect: boolean = compareHash(input.password, user.password);

        if (!passwordIsCorrect) {
            throw new Error("incorrect password.");
        }

        const token = generateToken({
            id: user.id,
            role: user.role,
          });
        res.status(200).send({status: {code: 200, message: `User logeed in`}, token: token})

    } catch (error) {
        res.send(error.message || error.sqlMessage)
    }
}
