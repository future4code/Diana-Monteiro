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
    .where("id", id);

      console.log(`Salário atualizado com sucesso para ${salary}`);

   } catch (error) {
      throw new Error(error.sqlMessage || error.message);
   }
};
```

b) A função é:

```
const deleteActor = async (id:string): Promise<any> => {
    try{
    await connection('Actor')
      .delete()
      .where("id", id);
     } catch (error) {
        throw new Error(error.sqlMessage || error.message);
     }
};

c) A função é:
´´´
const averageWave = async (gender:string): Promise<any> => {
try{
const result = await connection('Actor')
.avg("salary as avarage")
.where("gender", gender);  
 console.log(result[0])
return result[0];  
 } catch (error) {
throw new Error(error.sqlMessage || error.message);
}
};
´´´

### Exercício 3

a) O endpoint é:
```
app.get("/:id", async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const actor = await getActorById(id);

    res.status(200).send(actor)
  } catch (err) {
     console.log(error);
     res.send(error.sqlMessage || error.message);
    });
  }
});
```
b) O endpoint é:
```
app.get("/gender", async (req: Request, res: Response) => {
  try {
    const gender = req.query.gender as string;
    const countGender = await getAcountByGender(gender);
    res.status(200).send({ Actor: countGender });
  } catch (error) {
    console.log(error);
    res.send(error.sqlMessage || error.message);
  }
});
```

### Exercício 4

a) O endpoint é:
```
app.post("/", async (req:Request, res:Response) => {

  try {
        const id = req.body.id
        const salary = req.body.salary;
        const newSalary = Number(salary)

        await updateSalary(newSalary, id);

        res.status(200).send("Salário atualizado com sucesso");
      } catch (error) {
        console.log(error);
        res.send(error.sqlMessage || error.message);
      }
});
```

b) O endpoint é:
```
app.delete("/:id", async (req:Request, res:Response) => {

    try {
          const id = req.params.id;
          await deleteActor(id);
  
          res.status(200).send("Ação realizada com sucesso");
        } catch (error) {
          console.log(error);
          res.send(error.sqlMessage || error.message);
        }
  });
```

### Exercício 5
```
const createMovies = async (
  id: number,
  title: string,
  synopsis: string,
  realeseDate: Date,
  playingLimitDate: Date
): Promise<any> => {
  try {
    await connection
      .insert({
        id: id,
        title: title,
        synopsis: synopsis,
        releas_date: realeseDate,
        playing_limit_date: playingLimitDate,
      })
      .into("Movie");

    console.log(`Filme criado com sucesso`);
  } catch (error) {
    throw new Error(error.sqlMessage || error.message);
  }
};

app.post("/", async (req:Request, res:Response) => {

  try {
        await createMovies(
          req.body.id, 
          req.body.title,
          req.body.synopsis,
          req.body.releaseDate,
          req.body.playingLimitDate);

        res.status(200).send("Filme criado com sucesso");
      } catch (error) {
        console.log(error);
        res.send(error.sqlMessage || error.message);
      }
});
``` 

### Exercício 6

```
app.get("/", getAllMovies);

async function getAllMovies(req: Request, res: Response): Promise<any> {
  try {
    const result = await connection.raw(`
      SELECT * FROM Movie LIMIT 15
    `);

    res.status(200).send(result[0]);
  } catch (error) {
    res.status(400).send(error.message);
  }
}
```

### Exercício 7

```
const getMovieByTitle = async (title: string): Promise<any> => {
    const result = await connection.raw(`
        SELECT * FROM Movie WHERE title LIKE "%${title}%";
    `)
  
    return result[0][0]
  }
  
  app.get("/:title", async (req: Request, res: Response) => {
    try {
      const title = req.params.title;
      const myMovie = await getMovieByTitle(title);
      res.status(200).send({ Movie: myMovie });
    } catch (error) {
      console.log(error);
      res.send(error.sqlMessage || error.message);
    }
  });
```
