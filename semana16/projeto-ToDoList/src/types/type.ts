export enum STATUS {
    TODO = "to do",
    DOING = "doing",
    DONE = "done"
 }

 export type Task = {
     title: string,
     description: string,
     deadline: Date,
     status: STATUS,
     creatorUserId: number,
 }
 
 export type User = {
    name: string,
    nickname: string,
    email: string
 }

 export type TaskRelations = {
    task_id: number,
    user_id: number
 }