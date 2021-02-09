import postDatabase from "../data/postDataBase";
import idGenerator from "./services/idGenerator";
import authenticator from "../business/services/authenticator";
import dayjs from "dayjs";
import {
  createPostInputDTO,
  convertStringToPostType,
} from "../data/model/postModel";
import { AuthenticationData } from "../business/entities/user";
import { CustomError } from "../business/errors/CustomError";
import { post } from "./entities/post";

class PostBusiness {
  public businessCreatePost = async (
    input: createPostInputDTO,
    token: string
  ) => {
    try {
      if (!input.photo || !input.description || !input.type) {
        throw new Error('"photo", "description" and "type" must be provided');
      }

      const id: string = idGenerator.generateId();
      const tokenData: AuthenticationData = authenticator.getTokenData(token);

      const newPost: post = {
        id,
        photo: input.photo,
        description: input.description,
        type: convertStringToPostType(input.type),
        created_at: dayjs().format("YYYY-MM-DD"),
        author_id: tokenData.id,
      };

      await postDatabase.insertPost(newPost);
    } catch (error) {
      throw new CustomError(
        error.statusCode,
        error.sqlMessage || error.message
      );
    }
  };

  public async businessGetPostById(id: string) {
    try {
      const queryResult: any = await postDatabase.selectPostById(id);

      if (!queryResult) {
        throw new CustomError(404, "Post not found");
      }

      const post: post = {
        id: queryResult.id,
        photo: queryResult.photo,
        description: queryResult.description,
        type: queryResult.type,
        created_at: dayjs(queryResult.created_at).format("DD/MM/YYYY"),
        author_id: queryResult.author_id,
      };

      return post;
    } catch (error) {
      throw new CustomError(
        error.statusCode,
        error.sqlMessage || error.message
      );
    }
  }
}

export default new PostBusiness();
