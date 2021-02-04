// Libraries
import * as jwt from 'jsonwebtoken'
import { authenticationData } from "../entities/user"

export const generateToken = (payload: authenticationData): string => {
    const token: string = jwt.sign(
        payload,
        process.env.JWT_KEY as string,
        { expiresIn: process.env.JWT_EXPIRE_TIME }
    )

    return token
}

export const getTokenData = (token:string): authenticationData => {
    const payload = jwt.verify(token, process.env.JWT_KEY!);

    return payload as authenticationData
}
