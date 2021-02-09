import { BaseDatabase } from "./BaseDatabases";
import { post } from "../business/entities/post";
import { convertPostTypesToString } from "./model/postModel";

class PostDatabase extends BaseDatabase {
  tableName = "labook_posts";

  public insertPost = async (post: post) => {
    try {
      await BaseDatabase.connection
        .insert({
          id: post.id,
          photo: post.photo,
          description: post.description,
          type: convertPostTypesToString(post.type),
          created_at: post.created_at,
          author_id: post.author_id,
        })
        .into(this.tableName);
    } catch (error) {
      throw new Error(error.slqMessage || error.message);
    }
  };

  public selectPostById = async (id: string): Promise<post> => {
    try {
      const result = await BaseDatabase.connection(this.tableName)
        .select("*")
        .where({ id });

      return {
        id: result[0].id,
        photo: result[0].photo,
        description: result[0].description,
        type: result[0].type,
        created_at: result[0].created_at,
        author_id: result[0].author_id,
      };
    } catch (error) {
      throw new Error(error.slqMessage || error.message);
    }
  };
}

export default new PostDatabase();
