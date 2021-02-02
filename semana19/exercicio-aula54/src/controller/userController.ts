import { Request, Response } from "express";
import { createUser, getUserByEmail, getAllUsers, deleteUserById } from "../business/userBusiness";

export const signup = async (
    req: Request,
    res: Response
 ) => {
    try {
        const input = {
            email: req.body.email,
            name: req.body.name,
            password: req.body.password,
            role: req.body.role
        }
 
       const token = await createUser(input)
 
       res
          .status(201)
          .send({
             message: "Created user!",
             token
          })
 
    } catch (error) {
       res.status(400).send(error.message)
    }
 }

 export const login = async (
    req: Request,
    res: Response
 ): Promise<void> => {
    try {
       const { email, password } = req.body
 
       const token = await getUserByEmail(email, password)
 
       res.send({
          message: "Logged User!",
          token
       })
 
    } catch (error) {
       res.status(400).send(error.message)
    }
}

export const allUsers = async (
    req: Request,
    res: Response
 ): Promise<void> => {
    try {

        const token = req.headers.authorization!;
        const users = await getAllUsers(token);

        res.send(users).status(200);

    } catch (error) {
        res.status(400).send(error.message)
    }
}

export const deleteUser = async (
    req: Request,
    res: Response
 ): Promise<void> => {
    try {
        const  input = {
            id: req.params.id,
            token: req.headers.authorization!
        };

        await deleteUserById(input);

        res.status(200).send({ message: "User successfully deleted."});

    } catch (error) {
        res.status(400).send(error.message)
    }
}
