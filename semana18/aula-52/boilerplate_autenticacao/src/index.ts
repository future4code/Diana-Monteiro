import express from "express";
import { AddressInfo } from "net";
import {createUser} from "./endpoints/createUser"
import {login} from "./endpoints/login"
import {getUserById} from "./endpoints/getUserById";
import { deleteUserById } from "./endpoints/deleteUserById"
import { getAddressInfo } from './endpoints/getAdressInfo'

const app = express();
app.use(express.json());

app.post("/signup", createUser)
app.post("/login", login)
app.get("/user/profile", getUserById)
app.delete("/user/:id", deleteUserById)
app.get("/address/:cep", getAddressInfo)

const server = app.listen(process.env.PORT || 3000, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});