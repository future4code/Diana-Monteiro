// Libraries
import express, { Express } from 'express'
import cors from 'cors'

// Connection
import { AddressInfo } from 'net'

// Endpoints
import {createUser} from './endpoints/createUser'
import {login} from "./endpoints/login"
import {getUserProfile} from "./endpoints/getUserProfile"
import {getUserById} from "./endpoints/getUserById"
import {createRecipe} from "./endpoints/createRecipe"
import {getRecipeById} from "./endpoints/getRecipeById"
import {followUser} from "./endpoints/followUser"
import {deleteFollowUser} from "./endpoints/deleteFollow"

const app: Express = express()
app.use(express.json())
app.use(cors())

app.post("/signup", createUser)
app.post("/login", login)
app.get("/user/profile", getUserProfile)
app.get("/user/:id", getUserById)
app.post("/recipe", createRecipe)
app.get("/recipe/:id", getRecipeById)
app.post("/user/follow", followUser)
app.delete("/user/unfollow", deleteFollowUser)

// Server
const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo
       console.log(`Server is running in http://localhost:${address.port}`)
    } else {
       console.error(`Failure upon starting server.`)
    }
 })