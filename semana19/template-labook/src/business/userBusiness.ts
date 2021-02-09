import hashManager from "./services/hashManager";
import userDatabase from "../data/userDatabase";
import authenticator from "./services/authenticator";
import idGenerator from "./services/idGenerator";
import { user } from "./entities/user";
import { CustomError } from "./errors/CustomError";
import { signupInputDTO, loginInputDTO } from "../data/model/userModel";

class UserBusiness {
  public businessSignup = async (input: signupInputDTO) => {
    try {
      if (!input.name || !input.email || !input.password) {
        throw new CustomError(
          406,
          "Please provide a 'name', an 'email' and a 'password'"
        );
      }

      const id: string = idGenerator.generateId();
      const cypherPassword = await hashManager.hash(input.password);

      const user: user = {
        id,
        name: input.name,
        email: input.email,
        password: cypherPassword,
      };
      await userDatabase.insertUser(user);

      const token: string = authenticator.generateToken({ id });

      return token;
    } catch (error) {
      throw new CustomError(
        error.statusCode,
        error.sqlMessage || error.message
      );
    }
  };

  public businessLogin = async (input: loginInputDTO) => {
    try {
      if (!input.email || !input.password) {
        throw new CustomError(400, '"email" and "password" must be provided');
      }

      const user: user = await userDatabase.selectUserByEmail(input.email);

      if (!user) {
        throw new CustomError(404, "Invalid credentials");
      }

      const passwordIsCorrect: boolean = await hashManager.compare(
        input.password,
        user.password
      );

      if (!passwordIsCorrect) {
        throw new CustomError(404, "Invalid credentials");
      }

      const token: string = authenticator.generateToken({
        id: user.id,
      });

      return { data: user, token: token };
    } catch (error) {
      throw new CustomError(
        error.statusCode,
        error.sqlMessage || error.message
      );
    }
  };
}

export default new UserBusiness();
