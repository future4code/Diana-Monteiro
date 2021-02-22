// Types from Express.js library
import { Request, Response } from 'express'

// Database function
import {selectRecipeById} from '../data/querys/selectRecipeById'

//Services
import {getTokenData} from "../services/authenticator";

export const getRecipeById = async (req: Request, res: Response): Promise<any> => {
    try {
        res.statusCode = 422
        getTokenData(req.headers.authorization as string);
        const recipe = await selectRecipeById(req.params.id)

        res.status(200).send({
            id: recipe.id,
            title: recipe.title,
            description: recipe.description,
            creation_date: recipe.creation_date
         })

    } catch (error) {
        res.send(error.message || error.sqlMessage)
    }
}