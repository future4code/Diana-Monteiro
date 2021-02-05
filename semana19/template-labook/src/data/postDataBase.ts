import { BaseDatabase } from "./BaseDatabases";
import { post } from "../business/entities/post";
import { convertPostTypesToString } from "./model/postModel";

export class PostDatabase extends BaseDatabase {
  tableName = "labook_posts";

  insertPost = async (post: post) => {
    try {
      await BaseDatabase.connection(this.tableName).insert({
        id: post.id,
        photo: post.id,
        description: post.id,
        type: convertPostTypesToString(post.type),
        createdAt: post.createdAt,
        authorId: post.authorId,
      });
    } catch (error) {
      throw new Error(error.slqMessage || error.message);
    }
  };

  selectPostById = async (
    id: string
 ): Promise<post> => {

    try {
        const result = await BaseDatabase.connection("labook_posts")
        .select("*")
        .where({ id })

        return {
            id: result[0].id,
            photo: result[0].photo,
            description: result[0].description,
            type: result[0].type,
            createdAt: result[0].created_at,
            authorId: result[0].author_id,
         }
    } catch (error) {
        throw new Error(error.slqMessage || error.message)
     }
}
}
