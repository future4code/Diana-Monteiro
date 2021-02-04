// Libraries
import express, { Express } from 'express'
import cors from 'cors'

// Connection
import { AddressInfo } from 'net'

// Endpoints
import {signup, login, allUsers, deleteUser} from './controller/userController'


const app: Express = express()
app.use(express.json())
app.use(cors())

app.put("/signup", signup)
app.post("/login", login)
app.get("/all", allUsers)
app.delete("/:id", deleteUser)

// Server
const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo
       console.log(`Server is running in http://localhost:${address.port}`)
    } else {
       console.error(`Failure upon starting server.`)
    }
 })