// Types from Express.js library
import { Request, Response } from 'express'

// Database function
import {selectUserById} from '../data/querys/selectUserById'

//Services
import {getTokenData} from "../services/authenticator";

export const getUserById = async (req: Request, res: Response): Promise<void> => {
    try {
        res.statusCode = 422
        const token = req.headers.authorization as string;
        const authenticationData = getTokenData(token);
        const user = await selectUserById(req.params.id)

        res.status(200).send({
            id: user.id,
            email: user.email,
            name: user.name,
            role: user.role
         })

    } catch (error) {
        res.send(error.message || error.sqlMessage)
    }
}