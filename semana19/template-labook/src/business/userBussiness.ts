import { HashManager } from "./services/hashManager";
import { UserDatabase} from "../data/userDatabase";
import { generateToken } from "./services/authenticator";
import { generateId } from "./services/idGenerator";
import { user, signupInputDTO } from "./entities/user";

const hashManager: HashManager = new HashManager()
const userDatabase: UserDatabase = new UserDatabase()
let message = "Success!"


export const businessSignup = async (
    input: signupInputDTO
 ) => {

    if (!input.name || !input.email || !input.password) {
        message = '"name", "email" and "password" must be provided'
        throw new Error(message)
     }

     const id: string = generateId()
     const cypherPassword = await hashManager.hash(input.password);

     const user: user = {
        id,
        name: input.name,
        email: input.email,
        password: cypherPassword,
     }
     const userDatabase = new UserDatabase();
     await userDatabase.insertUser(user);

     const token: string = generateToken({ id })
     return token
 }

 export const businessLogin = async (
    email: string,
    password: string
 ) => {
    if (!email || !password) {
        message = '"email" and "password" must be provided'
        throw new Error(message)
     }

     const userDatabase = new UserDatabase();
     const user: user = await userDatabase.selectUserByEmail(email)

     if (!user) {
        throw new Error("Invalid credentials");
     }
  
     const passwordIsCorrect: boolean = await hashManager.compare(password, user.password)
  
     if (!passwordIsCorrect) {
        throw new Error("Invalid credentials")
     }
  
     const token: string = generateToken({
        id: user.id
     })
 
    return user;
 
 }