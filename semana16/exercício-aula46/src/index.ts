import knex from "knex";
import express, { Request, Response } from "express";
import dotenv from "dotenv";
import { AddressInfo } from "net";

/**************************************************************/

dotenv.config();

/**************************************************************/

const connection = knex({
  client: "mysql",
  connection: {
    host: process.env.DB_HOST,
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  },
});

/**************************************************************/

const app = express();

app.use(express.json());

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});

/**************************************************************/

app.get("/", testEndpoint);

async function testEndpoint(req: Request, res: Response): Promise<any> {
  try {
    const result = await connection.raw(`
      SELECT * FROM Actor
    `);

    res.status(200).send(result);
  } catch (error) {
    res.status(400).send(error.message);
  }
}

//Exercício 1 letraA
// const getActorById = async (id: string): Promise<any> => {
//   const result = await connection.raw(`
//     SELECT * FROM Actor WHERE id = '${id}'
//   `);

//   console.log(result[0][0])
//   return result[0][0];
// };

// getActorById("002")

// const getActorByName = async (name: string): Promise<any> => {
//   const result = await connection.raw(`
//       SELECT * FROM Actor WHERE name LIKE "%${name}%";
//   `)
  
//   return result[0][0]
// }

// app.get("/:name", async (req: Request, res: Response) => {
//   try {
//     const name = req.params.name;
//     const myActor = await getActorByName(name);
//     res.status(200).send({ actor: myActor });
//   } catch (error) {
//     console.log(error);
//     res.send(error.sqlMessage || error.message);
//   }
// });

// const getAcountByGender = async (gender: string): Promise<any> => {
//   const result = await connection.raw(`
//       SELECT COUNT (*) as count FROM Actor WHERE gender = '${gender}'
//   `)
  
//   return result[0][0]
// }

// app.get("/:gender", async (req: Request, res: Response) => {
//   try {
//     const gender = req.params.gender;
//     const countGender = await getAcountByGender(gender);
//     res.status(200).send({ Actor: countGender });
//   } catch (error) {
//     console.log(error);
//     res.send(error.sqlMessage || error.message);
//   }
// });

const updateSalary = async (salary: number, id:string): Promise<any> => {

  try{
  await connection('Actor')
    .update({
      salary: salary,
    })
    .where(id);

      console.log(`Salário atualizado com sucesso para ${salary}`);
      
   } catch (error) {
      throw new Error(error.sqlMessage || error.message);
   }
};

app.put("/", async (req:Request, res:Response) => {
  try {
        const id = req.body
        const salary = req.body as number;
        
        await updateSalary(salary, id);

        res.status(200).send("Salário atualizado com sucesso");
      } catch (error) {
        console.log(error);
        res.send(error.sqlMessage || error.message);
      }
});