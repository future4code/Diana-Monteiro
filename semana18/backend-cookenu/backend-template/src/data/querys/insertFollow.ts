// Database connection
import { connection } from '../connection/connection'

//Type
import { feed } from "../../types/feed"

export const insertFollow = async(follow: feed): Promise<any> => {
    try {
        await connection
        .insert({
            follower_id: follow.follower_id,
            followed_id: follow.followed_id
          })
          .into("feed_cookenu")        
    } catch (error) {
        throw new Error(error.sqlMessage)
    }
}

