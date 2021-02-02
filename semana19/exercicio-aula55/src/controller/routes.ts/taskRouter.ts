import express from "express";
import {getTaskById, createTask} from "../taskController";

export const taskRouter = express.Router();

taskRouter.put('/', createTask);
taskRouter.get('/:id', getTaskById);