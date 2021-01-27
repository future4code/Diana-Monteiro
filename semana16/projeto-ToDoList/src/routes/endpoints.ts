// Libraries
import express, { Router, Request, Response } from 'express'
import cors from 'cors'

// Query functions
import {createUser, getUserById, editUser, createTask, getTaskById, getAllUsers, getUserByNickname, createResponsible, deleteTaskById} from '../querys/data'

//Chamando função de formatar data
const { formatStringDate} = require('../utils/utils');

const router: Router = express.Router()
router.use(express.json())
router.use(cors())


//Criar novo usuário
router.put("/user", async (req: Request, res: Response) => {
    try {
        const result = {
            name: req.body.name,
            nickname: req.body.nickname,
            email: req.body.email
        }

       //Validação todos os campos obrigatórios
       const keys = Object.keys(req.body)
       for (const key of keys) {
         if (req.body[key] == "")
           return res.status(400).send({ message: "Por gentileza preencha todos os campos corretamente!"})
       }

        await createUser(result)

        res.status(200).send("O usuário criado com sucesso")

    } catch (error) {
        res.status(400).send(error.sqlMessage || error.message)
    }
})

//Pegar usuário por nickname
router.get("/user", async (req: Request, res: Response) => {
    let errorCode: number = 400;

    try {
        const result = await getUserByNickname(req.query.nickname as string)

        if (!result) {
            errorCode = 422;
            throw new Error("Query não enviada.");
        }
        res.status(200).send({users: result})

    } catch (error) {
        res.status(400).send(error.sqlMessage || error.message)
    }
})

//Pegar todos os usuários
router.get("/user/all", async (req: Request, res: Response) => {
    let errorCode: number = 400;

    try {
        const result = await getAllUsers()

        res.status(200).send({users: result})

    } catch (error) {
        res.status(400).send(error.sqlMessage || error.message)
    }
})

//Pegar usuário por Id
router.get("/user/:id", async (req: Request, res: Response) => {
    let errorCode: number = 400;

    try {
        const result = await getUserById(req.params.id)

        if (!result) {
            errorCode = 422;
            throw new Error("Id inválido.");
        }

        res.status(200).send(result)

    } catch (error) {
        res.status(400).send(error.sqlMessage || error.message)
    }
})

//Editar usuário
router.post("/user/edit/:id", async (req:Request, res: Response) => {
    try {
        const result = {
            id: req.params.id,
            name: req.body.name,
            nickname: req.body.nickname,
        }

    //Validação todos os campos obrigatórios
        const keys = Object.keys(req.body)
  
        for (const key of keys) {
          if (req.body[key] == "")
            return res.status(400).send({ message: "Dados inválidos. Por favor, preencha todos os campos."})
        }

        await editUser(result)

        res.status(200).send("Usuário editado com sucesso!")

    } catch (error) {
        res.status(400).send(error.sqlMessage || error.message)
    }
})

//Pegar Tarefas Criados por um usuário
router.get("/task", async (req: Request, res: Response) => {
    let errorCode: number = 400;

    try {
        const creatorUserId = req.query.creatorUserId as string
        const result = await getTaskById(creatorUserId)

        if (!result) {
            errorCode = 422;
            throw new Error("Id inválido.");
        }

        res.status(200).send(result)

    } catch (error) {
        res.status(400).send(error.sqlMessage || error.message)
    }
})

//Criar nova tarefa
router.put("/task", async (req: Request, res: Response) => {
    try {
        const { title, description, deadline, status, creatorUserId} = req.body;

        const result = {
            title: title,
            description: description,
            deadline: await formatStringDate(deadline),
            status: status,
            creatorUserId: creatorUserId
        }

       //Validação todos os campos obrigatórios
       const keys = Object.keys(req.body)
       for (const key of keys) {
         if (req.body[key] == "")
           return res.status(400).send({ message: "Por gentileza preencha todos os campos corretamente!"})
       }
        
        await createTask(result)
        res.status(200).send("Tarefa criado com sucesso")

    } catch (error) {
        res.status(400).send(error.sqlMessage || error.message)
    }
})

//Atribuir um usuário responsável a uma tarefa
router.post("/task/responsible", async (req: Request, res: Response) => {
    try {
        const result = {
            task_id: req.body.task_id,
            user_id: req.body.user_id
        }

       //Validação todos os campos obrigatórios
       const keys = Object.keys(req.body)
       for (const key of keys) {
         if (req.body[key] == "")
           return res.status(400).send({ message: "Por gentileza preencha todos os campos corretamente!"})
       }
        
        await createResponsible(result)
        res.status(200).send({ message:`A tarefa ${result.task_id} foi atribuída ao usuário ${result.user_id} com sucesso.`})

    } catch (error) {
        res.status(400).send(error.sqlMessage || error.message)
    }
})

//Pegar tarefa por Id
router.get("/task/:id", async (req: Request, res: Response) => {
    let errorCode: number = 400;

    try {
        const result = await getTaskById(req.params.id)

        if (!result) {
            errorCode = 422;
            throw new Error("Id inválido.");
        }

        res.status(200).send(result)

    } catch (error) {
        res.status(400).send(error.sqlMessage || error.message)
    }
})

//Apagar tarefa por Id OBS: Não fui bem sucedida pois não sei como apagar todas as relações conectadas a uma tarefa na mesma função. Aceito sugestões <3

router.delete("/task/:id", async (req: Request, res: Response) => {
    let errorCode: number = 400;

    try {
        const result = await deleteTaskById(req.params.id)

        if (!result) {
            errorCode = 422;
            throw new Error("Id inválido.");
        }

        res.status(200).send({ message: "Tarefa deletada com sucesso!"})

    } catch (error) {
        res.status(400).send(error.sqlMessage || error.message)
    }
})
export default router
