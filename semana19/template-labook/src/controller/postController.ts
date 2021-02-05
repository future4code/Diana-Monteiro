import { Request, Response } from "express";
import { getTokenData } from "../business/services/authenticator";
import { post } from "../business/entities/post";
import { createPostInputDTO } from "../data/model/postModel";
import { AuthenticationData } from "../business/entities/user"

export const createPost = async (req: Request, res: Response): Promise<any> => {
    try {
        const { photo, description, type } = req.body
 
       const token: string = req.headers.authorization as string
 
       const tokenData: AuthenticationData = getTokenData(token)
      
 
       res.status(201).send({ message: "Created post!" })
 
    } catch (error) {
        res.status(error.statusCode || 400).send(error.message)
    }
 }
 
//  export const getPostById = async (req: Request, res: Response) => {
//     try {
//        let message = "Success!"
 
//        const { id } = req.params
 
      
 
//        if (!queryResult[0]) {
//           res.statusCode = 404
//           message = "Post not found"
//           throw new Error(message)
//        }
 
     
//        res.status(200).send({ message, post })
 
//     } catch (error) {
//        let message = error.sqlMessage || error.message
//        res.statusCode = 400
 
//        res.send({ message })
//     }
//  }
 