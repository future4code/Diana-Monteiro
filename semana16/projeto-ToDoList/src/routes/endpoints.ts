// Libraries
import express, { Router, Request, Response } from 'express'
import cors from 'cors'

// Query functions
import {createUser, getUserById, editUser, createTask, getTaskById} from '../querys/data'

//Chamando função de formatar data
const { formatStringDate} = require('../utils/utils');

const router: Router = express.Router()
router.use(express.json())
router.use(cors())

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

///////////////////////////////////////////////////
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

/////////////////////////////////////////////////////////////
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

/////////////////////////////////////////////////////////
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

///////////////////////////////////////////////////////////////////////////
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

export default router