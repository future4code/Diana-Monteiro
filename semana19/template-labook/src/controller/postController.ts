import { Request, Response } from "express";
import { createPostInputDTO } from "../data/model/postModel";
import authenticator from "../business/services/authenticator";
import postBusiness from "../business/postBusiness";

class PostController {
  createPost = async (req: Request, res: Response): Promise<any> => {
    try {
      const input: createPostInputDTO = {
        photo: req.body.photo,
        description: req.body.description,
        type: req.body.type,
      };

      const token: string = req.headers.authorization as string;

      await postBusiness.businessCreatePost(input, token);

      res.status(201).send({ message: "Post created!" });
    } catch (error) {
      res.status(error.statusCode || 400).send(error.message);
    }
  };

  getPostById = async (req: Request, res: Response) => {
    try {
      authenticator.getTokenData(req.headers.authorization as string);
      const post = await postBusiness.businessGetPostById(req.params.id);

      res.status(200).send({ message: "Success!", post });
    } catch (error) {
      let message = error.sqlMessage || error.message;
      res.statusCode = 400;

      res.send({ message });
    }
  };
}

export default new PostController();
