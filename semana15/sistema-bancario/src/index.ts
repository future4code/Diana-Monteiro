//importando express com Request e Response e cors
import express, { Express, Request, Response } from "express";
import cors from "cors";

//importando dados e types
import { account, accounts, extract } from "./accounts";

//extra: importando configuração de rede do node
import { AddressInfo } from "net";

//iniciando a aplicação web com express
const app: Express = express();

//ativando os módulos de Bodyparser e cors
app.use(express.json());
app.use(cors());

app.get("/accounts", (req: Request, res: Response) => {
  let errorCode: number = 400;
  const usersAccounts = accounts;

  try {
    //Se não houverem cadastros, retorne um erro
    if (!usersAccounts) {
      errorCode = 404;
      throw new Error("Nenhum usuário registrado");
    }
    //Imprima todos as contas cadastradas
    res.status(200).send(usersAccounts);
  } catch (error) {
    res.status(errorCode).send(error.message);
  }
});

app.post("/accounts", (req: Request, res: Response) => {
  let errorCode: number = 400;

  try {
    let { name, cpf, birthDate } = req.body;

    //recebe a data de nascimento  em string e converte para date
    const [day, month, year] = birthDate.split("/");
    birthDate = new Date(`${year}-${month}-${day}`);

    //Calcula a diferença do ano atual para a data de nascimento
    const ageMilisseconds: number = Date.now() - birthDate.getTime();
    //Calcula a idade em mílsenimos de secundos para/ segundo/ minutos/ horas/ anos
    const ageInYears: number = ageMilisseconds / 1000 / 60 / 60 / 24 / 365;

    //Se a idade for menor que 18 retorne um erro
    if (ageInYears < 18) {
      errorCode = 404;
      throw new Error("Idade deve ser maior que 18 anos.");
    }

    //Confere se o cpf digitado já está no banco de dados
    const checkCpf: account | undefined = accounts.find(
      (user) => user.cpf === req.body.cpf
    );

    //Se o cpf já consta no banco de dados retorne um erro
    if (checkCpf) {
      errorCode = 404;
      throw new Error("Cpf já cadastrado.");
    }

    //Se algum dado não for preenchido retorne um erro
    if (!name || !cpf || !birthDate) {
      errorCode = 406;
      throw new Error("Preencha todos os campos para seguir!");
    }

    //Insira no banco de dados os dados do novo usuário
    accounts.push({ name, cpf, birthDate, balance: 0, statement: [] });
    res
      .status(201)
      .send({
        message: "Conta criada com sucesso!",
        account: { name, cpf, birthDate, balance: 0, statement: [] },
      });
  } catch (error) {
    res.status(errorCode).send(error.message);
  }
});

app.get("/accounts/balance", (req: Request, res: Response) => {
  let errorCode: number = 400;

  try {
    //Encontre e devolva a conta do cpf passado como parâmetro
    const result: account | undefined = accounts.find(
      (user: account) => user.cpf === req.query.cpf
    );

    //Cpf não encontrado retorne um erro
    if (!result) {
      errorCode = 422;
      throw new Error("Dados inválido. Por favor, preencha corretamente.");
    }

    //Retorna o saldo da conta referente ao cpf digitado
    res
      .status(200)
      .send({
        balance: result.balance,
        message: `O saldo na conta de ${result.name} é de ${result.balance},00R$.`,
      });
  } catch (error) {
    res.status(errorCode).send(error.message);
  }
});

app.put("/accounts/:name/cpf", (req: Request, res: Response) => {
  let errorCode: number = 400;

  try {
    const value: number = Number(req.body.value);
    const cpf = req.query.cpf;
    const name = req.params.name;

    ///Encontre e devolva a conta do nome passado como parâmetro
    const userName = accounts.filter((user: account) => user.name === name);
    ///Encontre e devolva a conta do cpf passado como parâmetro
    let userCpf = accounts.findIndex((user: account) => user.cpf === cpf);

    //Se o cpf não for encontrado devolve um erro
    if (userCpf === -1 && !userName) {
      errorCode = 404;
      throw new Error("Usuário não encontrado.");
    }

    //Se todos os valores não forem preenchidos devolve um erro
    if (!cpf || !value || !name) {
      errorCode = 422;
      throw new Error("Dados inválidos!");
    }

    //Soma o valor inserido ao saldo atul
    const totalBalance: number = (accounts[userCpf].balance += Number(value));

    //Acrescenta ao array de extratos a nova transação
    accounts[userCpf].statement.push({
        value: value,
        date: Date.now(),
        description: "Depósito de dinheiro"
    })

    res
      .status(200)
      .send({
        message: `Operação realizada. Seu saldo atual é de ${totalBalance},00 R$.`,
      });
  } catch (error) {
    res.status(errorCode).send({ message: error.message });
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
