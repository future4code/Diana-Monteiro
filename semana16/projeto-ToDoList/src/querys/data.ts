// Dependencies
import knex from 'knex';
import Knex from 'knex';
import dotenv from 'dotenv';

// Types and enums
import {STATUS, Task, User, TaskRelations} from "../types/type"

// Database configuration
dotenv.config()

const connection: Knex = knex({
    client: "mysql",
    connection: {
        host: process.env.DB_HOST,
        port: 3306,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME
    }
})

export const createUser = async (user: User): Promise<void> => {
    try {
        await connection
            .insert({
                name: user.name,
                nickname: user.nickname,
                email: user.email
            })
            .into("Users")

            console.log(`O usuário, ${user.name} foi criado com sucesso`);

    } catch (error) {
        throw new Error(error.sqlMessage || error.message)
    }
}

export const getAllUsers = async (): Promise<any> => {
    try {
        const result = await connection("Users")
        .select("*")
        return (result)
    } catch (error) {
        throw new Error(error.sqlMessage || error.message)
    }
}

export const getUserById = async (id: string): Promise<any> => {
    try {
        const result = await connection("Users")
        .select("id", "nickname")
        .where("id", id) 
        return (result[0])
    } catch (error) {
        throw new Error(error.sqlMessage || error.message)
    }
}

export const getUserByNickname = async (nickname: string): Promise<any> => {
    try {
        const result = await connection("Users")
        .select("id", "nickname")
        .where("nickname", nickname) 
        return (result[0])
    } catch (error) {
        throw new Error(error.sqlMessage || error.message)
    }
}

export const editUser = async (user: {
     id: string,
     name: string, 
     nickname:string 
    }): Promise<void> => {
    try {
        await connection("Users")
            .update({ name: user.name, nickname: user.nickname })
            .where("id", user.id)

    } catch (error) {
        throw new Error(error.sqlMessage || error.message)
    }
}

export const createTask = async (task: Task): Promise<void> => {
    try {
        await connection
            .insert({
                title: task.title,
                description: task.description,
                deadline: task.deadline,
                status: task.status,
                creatorUserId: task.creatorUserId
            })
            .into("Tasks")

    } catch (error) {
        throw new Error(error.sqlMessage || error.message)
    }
}

export const getTaskById = async (task_id: string): Promise<any> => {
    try {
        const result = await connection("Tasks")
        .select("*")
        .where("task_id", task_id) 
        return (result[0])
    } catch (error) {
        throw new Error(error.sqlMessage || error.message)
    }
}

export const getTaskByCreator = async (creatorUserId: string): Promise<any> => {
    try {
        const result = await connection("Tasks")
        .select("*")
        .where("creatorUserId", creatorUserId) 
        return (result[0])
    } catch (error) {
        throw new Error(error.sqlMessage || error.message)
    }
}


export const createResponsible = async (task_relation: TaskRelations): Promise<void> => {
    try {
        await connection
            .insert({
                task_id: task_relation.task_id,
                user_id: task_relation.user_id
            })
            .into("Task_Relations")

    } catch (error) {
        throw new Error(error.sqlMessage || error.message)
    }
}

export const deleteTaskById = async (task_id: string): Promise<any> => {
    try {
        const result =  await connection("Task_Relations")
        .delete("*")
        .where("task_id", task_id) 
        
        await connection("Tasks")
        .delete("*")
        .where("task_id", task_id)
        
       
    } catch (error) {
        throw new Error(error.sqlMessage || error.message)
    }
}