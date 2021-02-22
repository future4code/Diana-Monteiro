// Libraries
import * as jwt from 'jsonwebtoken';

//Type
import { USER_ROLES } from "../types/user";

export const generateToken = (payload: AuthenticationData): string => {
    const token: string = jwt.sign(
       payload,
        process.env.JWT_KEY as string,
        { expiresIn: process.env.JWT_EXPIRE_TIME }
    )

    return token
}

export const getTokenData = (token:string): AuthenticationData => {
    const payload = jwt.verify(token, process.env.JWT_KEY!);

    return payload as AuthenticationData
}

export type AuthenticationData = {
    id: string
    role: USER_ROLES;
}
