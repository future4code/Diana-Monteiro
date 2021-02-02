import { task } from "./task"

export enum USER_ROLES {
   NORMAL = 'NORMAL',
   ADMIN = 'ADMIN'
}

export type authenticationData = {
   id: string,
   role: USER_ROLES
}

export type user = {
   id: string,
   name: string,
   nickname: string,
   email: string,
   password: string,
   role: USER_ROLES,
   tasks?: task[]
}

export type signupInputDTO = {
   name: string,
   nickname: string,
   email: string,
   password: string,
   role: string
}