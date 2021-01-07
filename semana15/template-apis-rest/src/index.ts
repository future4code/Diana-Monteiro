//importando express com Request e Response e cors
import express, { Request, Response } from "express";
import cors from "cors";

//extra: importando configuração de rede do node
import { AddressInfo } from "net";
//iniciando a aplicação web com express
const app = express();

//ativando os módulos de Bodyparser e cors
app.use(express.json());
app.use(cors());

type user = {
  id: number;
  name: string;
  email: string;
  type: UserType;
  age: number;
};

enum UserType {
  ADMIN = "ADMIN",
  NORMAL = "NORMAL",
}

let users: user[] = [
  {
    id: 1,
    name: "Alice",
    email: "alice@email.com",
    type: UserType.ADMIN,
    age: 12,
  },
  {
    id: 2,
    name: "Bob",
    email: "bob@email.com",
    type: UserType.NORMAL,
    age: 36,
  },
  {
    id: 3,
    name: "Coragem",
    email: "coragem@email.com",
    type: UserType.NORMAL,
    age: 21,
  },
  {
    id: 4,
    name: "Dory",
    email: "dory@email.com",
    type: UserType.NORMAL,
    age: 17,
  },
  {
    id: 5,
    name: "Elsa",
    email: "elsa@email.com",
    type: UserType.ADMIN,
    age: 17,
  },
  {
    id: 6,
    name: "Fred",
    email: "fred@email.com",
    type: UserType.ADMIN,
    age: 60,
  },
];

//Eexercício 1
// a. O método HTTP que deve ser utilizado será o GET.
// b. A entidade será "/user". Ela será indicada como parãmetro da função em paths, dessa forma:
//    app.get("/user", (req: Request, res: Response) => {)}

app.get("/user", (req: Request, res: Response) => {
  const usersList = users;
  res.status(200).send(usersList);
});

//Exercício 2

//a) Através da queryParams, porque é melhor em caso de buscas dentro de um mesmo conjunto de dados.
//b) Usando o Enum específico para types.

app.get("/user/type", (req: Request, res: Response) => {
  let errorCode: number = 400;

  try {
    let type: string = (req.query.type as string).toUpperCase();

    if (type !== UserType.ADMIN && type !== UserType.NORMAL) {
      errorCode = 422;
      throw new Error("type inválido. Por favor, preencha corretamente.");
    }

    const myUser = users.filter((u: user) => u.type === type.toUpperCase());

    if (!myUser) {
      errorCode = 404;
      throw new Error("Usuário não encontrado.");
    }

    const result = myUser;
    res.status(200).send(result);
  } catch (error) {
    res.status(errorCode).send(error.message);
  }
});

//Exercício 3

//a) Query.

app.get("/user/name", (req: Request, res: Response) => {
  let errorCode: number = 400;

  try {
    const name: string = req.query.name as string;
    if (!name) {
      errorCode = 422;
      throw new Error("Nome inválido. Por favor, preencha corretamente.");
    }

    const myUser = users.find(
      (u: user) => u.name.toLowerCase === name.toLowerCase
    );

//b)
    if (!myUser) {
      errorCode = 404;
      throw new Error("Usuário não encontrado.");
    }

    const result = myUser;
    res.status(200).send(result);
  } catch (error) {
    res.status(errorCode).send(error.message);
  }
});

//exercício 4

//a) Nada, continua adicionando um novo usuário normalmente.
//b) Não, ele é mais indicado para fazer alterações em dados já existentes, o post é mais eficiente para essas situações.

app.post("/user", (req: Request, res: Response) => {
  let errorCode: number = 400;

  try {
    const reqBody: user = {
      id: Date.now(),
      name: req.body.name,
      email: req.body.email,
      type: req.body.type,
      age: req.body.age,
    };

    users.push(reqBody);
    res
      .status(200)
      .send({ message: "Usuário inserido com sucesso!", user: reqBody });
  } catch (error) {
    res.status(errorCode).send(error.message);
  }
});

//exercício 5

app.put("/user", (req: Request, res: Response) => {
  let errorCode: number = 400;

  try {
    const lastUserIndex: number = Number(users.length -1)
    const name: string = req.body.name

    users[lastUserIndex].name = `${name}-ALTERADO`
    res.status(200).send({message: "Usuário atualizado com sucesso!"});
  } catch (error) {
    res.status(errorCode).send({message: error.message});
  }
})

//exercício 6
app.patch("/user", (req: Request, res: Response) => {
  let errorCode: number = 400;

  try {
    const lastUserIndex: number = Number(users.length -1)
    const name: string = req.body.name

    users[lastUserIndex].name = `${name}-REALTERADO`
    res.status(200).send({message: "Usuário atualizado com sucesso!"});
  } catch (error) {
    res.status(errorCode).send({message: error.message});
  }
})

//exercício 7
app.delete("/user", (req: Request, res: Response) => {
  let errorCode: number = 400;

  try {
    //código aqui
  } catch (error) {
  }
})

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost: ${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});
