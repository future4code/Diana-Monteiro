import { PostDatabase } from "../data/postDataBase";
import { generateId } from "./services/idGenerator";
import { post } from "./entities/post";
import { getTokenData } from "../business/services/authenticator";
import { createPostInputDTO, convertStringToPostType } from "../data/model/postModel";
import { AuthenticationData } from "../business/entities/user"

const { date } = require("./services/dateFunction");
const postDatabase: PostDatabase = new PostDatabase();

export class PostBusiness {

 businessCreatePost = async (input: createPostInputDTO, token: string) => {
  if (
    !input.photo ||
    !input.description ||
    !input.type
  ) {
    throw new Error('"photo", "description" and "type" must be provided');
  }

  const id: string = generateId();
  const createdDate = date(Date.now())
  const tokenData: AuthenticationData = getTokenData(token)

  const newPost: post = {
    id,
    photo: input.photo,
    description: input.description,
    type: convertStringToPostType(input.type),
    created_at: createdDate,
    author_id: tokenData.id
  };
   await postDatabase.insertPost(newPost);
   return;
};
}