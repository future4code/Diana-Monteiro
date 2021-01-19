// Libraries
import { Request, Response } from 'express'

// Query functions
import {selectUserByType} from '../data/selectUserByType'

export const getUserByType = async(req: Request,res: Response): Promise<void> =>{
    try {
       const users = await selectUserByType(req.params.type)
 
       if(!users.length){
          res.statusCode = 404
          throw new Error("No recipes found")
       }
 
       res.status(200).send(users)
       
    } catch (error) {
       console.log(error)
       res.send(error.message || error.sqlMessage)
    }
 }
