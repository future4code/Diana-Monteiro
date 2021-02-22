// Types from Express.js library
import { Request, Response } from "express";

// Database function
import { deleteFollow } from "../data/querys/deleteFollow";

//Services
import { getTokenData } from "../services/authenticator";

export const deleteFollowUser = async (req: Request, res: Response): Promise<any> => {
  try {
    res.statusCode = 422;
    const token = req.headers.authorization as string;
    const authenticationData = getTokenData(token);
    const follow = {
      follower_id: authenticationData.id,
      followed_id: req.body.followed_id,
    };

    if(!follow.followed_id){throw new Error("User not found!")}
    
    await deleteFollow(follow);
    res.status(200).send({ message: "Unfollowed successfully" });
  } catch (error) {
    res.send(error.message || error.sqlMessage);
  }
};