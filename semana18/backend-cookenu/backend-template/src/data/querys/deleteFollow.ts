// Database connection
import { connection } from '../connection/connection'

//Type
import { feed } from "../../types/feed"

export const deleteFollow = async(follow: feed): Promise<any> => {
    try {
        await connection("feed_cookenu")
        .delete("*")
        .where({
            follower_id: follow.follower_id,
            followed_id: follow.followed_id
         })        
    } catch (error) {
        throw new Error(error.sqlMessage)
    }
}