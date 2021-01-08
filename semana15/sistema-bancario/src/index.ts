//importando express com Request e Response e cors
import express, { Express, Request, Response } from "express";
import cors from "cors";

//importando dados e types
import { account, accounts } from "./accounts";

//extra: importando configuração de rede do node
import { AddressInfo } from "net";

//iniciando a aplicação web com express
const app: Express = express();

//ativando os módulos de Bodyparser e cors
app.use(express.json());
app.use(cors());

app.get("/accounts/", (req: Request, res: Response) => {
  let errorCode: number = 400;
  const usersAccounts = accounts;

  try {
    if (!usersAccounts) {
      errorCode = 404;
      throw new Error("Nenhum usuário registrado");
    }
    res.status(200).send(usersAccounts);
  } catch (error) {
    res.status(errorCode).send(error.message);
  }
});

app.post("/accounts", (req: Request, res: Response) => {
  let errorCode: number = 400;

  const reqBody: account = {
    cpf: req.body.cpf,
    name: req.body.name,
    birthDate: req.body.birthDate,
    balance: 0,
    userExtract: [],
  };

  const checkCpf: account | undefined = accounts.find(
    (user) => user.cpf === req.body.cpf
  );

  try {
    //   if () {
    //     errorCode = 422;
    //     throw new Error("Você deve ter mais de 18 anos de idade para abrir uma conta.");
    //   }

    if (checkCpf) {
      errorCode = 404;
      throw new Error("Cpf já cadastrado.");
    }

    accounts.push(reqBody);
    res
      .status(200)
      .send({ message: "Conta criada com sucesso!", user: reqBody });
  } catch (error) {
    res.status(errorCode).send(error.message);
  }
});

app.get("/accounts/balance", (req: Request, res: Response) => {
    let errorCode: number = 400;
  
    try {
      const result: account | undefined = accounts.find((user: account) => user.cpf === req.query.cpf
       );
  
      if (!result) {
        errorCode = 422;
        throw new Error("Dados inválido. Por favor, preencha corretamente.");
      }
  
      res.status(200).send({"balance": result.balance});
    } catch (error) {
      res.status(errorCode).send(error.message);
    }
});

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost: ${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});
