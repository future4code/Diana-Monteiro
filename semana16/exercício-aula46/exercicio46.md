### Exercício 1
a) Quando usamos o row nos é retornado uma promise contendo os dados chamados e os metadados de criação desses dados.
b) A função é:
```
const getActorByName = async (name: string): Promise<any> => {
  const result = await connection.raw(`
      SELECT * FROM Actor WHERE name = '${name}'
  `)
  
  return result[0][0]
}

app.get("/:name", async (req: Request, res: Response) => {
  try {
    const name = req.params.name;
    const myActor = await getActorByName(name);
    res.status(200).send({ actor: myActor });
  } catch (error) {
    console.log(error);
    res.send(error.message);
  }
});
```
c) A funcção é:
```
const getAcountByGender = async (gender: string): Promise<any> => {
  const result = await connection.raw(`
      SELECT COUNT (*) as count FROM Actor WHERE gender = '${gender}'
  `)
  
  return result[0][0]
}

app.get("/:gender", async (req: Request, res: Response) => {
  try {
    const gender = req.params.gender;
    const countGender = await getAcountByGender(gender);
    res.status(200).send({ Actor: countGender });
  } catch (error) {
    console.log(error);
    res.send(error.sqlMessage || error.message);
  }
});
```

### Exercício 2
a) A função é: 
```
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
```