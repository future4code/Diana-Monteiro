import { PostDatabase } from "../data/postDataBase";
import { generateId } from "./services/idGenerator";
import { post } from "./entities/post";
import { createPostInputDTO, convertStringToPostType } from "../data/model/postModel";

const { date } = require("../services/dateFunction");
const postDatabase: PostDatabase = new PostDatabase();
let message = "Success!";

export const businessCreatePost = async (input: createPostInputDTO) => {
  if (
    !input.photo ||
    !input.description ||
    !input.type ||
    !input.authorId
  ) {
    message = '"photo", "description", "type", "createdAt" and "authorId" must be provided';
    throw new Error(message);
  }

  const id: string = generateId();
  const createdDate = date(Date.now())

  const newPost: post = {
    id,
    photo: input.photo,
    description: input.description,
    type: convertStringToPostType(input.type),
    createdAt: createdDate,
    authorId: input.type
  };
   const post = await postDatabase.insertPost(newPost);

  return post;
};
