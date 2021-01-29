// Types from Express.js library
import { Request, Response } from "express";

// Database function
import { insertFollow } from "../data/querys/insertFollow";

//Services
import { getTokenData } from "../services/authenticator";

export const followUser = async (req: Request, res: Response): Promise<any> => {
  try {
    res.statusCode = 422;
    const token = req.headers.authorization as string;
    const authenticationData = getTokenData(token);
    const follow = {
      follower_id: authenticationData.id,
      followed_id: req.body.followed_id,
    };

    if(!follow.followed_id){throw new Error("User not found!")}
    
    await insertFollow(follow);
    res.status(200).send({ message: "Followed successfully" });
  } catch (error) {
    res.send(error.message || error.sqlMessage);
  }
};
