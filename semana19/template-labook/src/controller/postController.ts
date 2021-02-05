import { Request, Response } from "express";
import { post } from "../business/entities/post";
import { createPostInputDTO } from "../data/model/postModel";
import { PostBusiness } from "../business/postBusiness";

const postBusiness: PostBusiness = new PostBusiness();

export class PostController {

 createPost = async (req: Request, res: Response): Promise<any> => {
    try {
        const input: createPostInputDTO = {
            photo: req.body.photo,
            description: req.body.description,
            type: req.body.type,
          };
 
       const token: string = req.headers.authorization as string
 
      await postBusiness.businessCreatePost(input, token);
 
       res.status(201).send({ message: "Created post!" })
 
    } catch (error) {
        res.status(error.statusCode || 400).send(error.message)
    }
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
 