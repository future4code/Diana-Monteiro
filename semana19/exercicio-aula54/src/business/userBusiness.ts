import { compare, hash } from "./services/hashManager";
import { insertUser, selectUserByEmail, selectAllUsers, deleteUser } from "../data/userDatabase";
import { generateToken, getTokenData } from "./services/authenticator";
import { generateId } from "./services/idGenerator";
import { user } from "./entities/user";

export const createUser = async (user: any) => {
  try {
    if (!user.name || !user.email || !user.password || !user.role) {
      throw new Error("Please fill all the fields");
    }

    if (user.email.indexOf("@") === -1) {
      throw new Error("Invalid Email");
    }

    if (user.password.length < 6) {
      throw new Error("Password must have at least 6 characters");
    }

    const id: string = generateId();

    const cypherPassword = await hash(user.password);

    await insertUser({
      id,
      name: user.name,
      email: user.email,
      password: cypherPassword,
      role: user.role,
    });

    const token: string = generateToken({
      id,
      role: user.role,
    });

    return token;
  } catch (error) {
    throw new Error(
      error.message ||
        "Error creating user. Please check your system administrator."
    );
  }
};

export const getUserByEmail = async (
    email: string,
    password: string
 ) => {
    try {

    if (!email || !password) {
       throw new Error("'email' and 'password' are required")
    }
 
    const user: user = await selectUserByEmail(email)
 
    const passwordIsCorrect: boolean = await compare(password, user.password)
 
    if (!passwordIsCorrect) {
       throw new Error("Invalid password")
    }
 
    const token: string = generateToken({
       id: user.id,
       role: user.role
    })
 
    return token
 }catch (error) {
    throw new Error(
      error.message ||
        "Error getting user. Please check your system administrator."
    );
  }
};

export const getAllUsers = async(token: string) => {
    try {
        getTokenData(token);
        return await selectAllUsers();
        
    } catch (error) {
        throw new Error(
          error.message ||
            "Error getting all user. Please check your system administrator."
        );
      }
}

export const deleteUserById = async(input: {
    id:string, token:string
}) => {
    try {
        const verifiedToken = getTokenData(input.token);

        if(verifiedToken.role !== "ADMIN"){
            throw new Error("Only administrators can delete users!")
        }
        return await deleteUser(input.id);
        
    } catch (error) {
        throw new Error(
          error.message ||
            "Error deleting user. Please check your system administrator."
        );
      }
  }
  