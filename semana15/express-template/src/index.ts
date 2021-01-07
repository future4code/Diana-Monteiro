import express, { Request, Response } from "express";
import cors from "cors";
import { countries, country } from "./countries";

const app = express();

app.use(express.json());
app.use(cors());

//ENDPOINT 1
app.get("/countries/all", (req: Request, res: Response) => {
  const result = countries.map((country) => ({
    id: country.id,
    name: country.name,
  }));

  res.status(200).send(result);
});

//ENDEPOINT 3
app.get("/countries/search", (req: Request, res: Response) => {
  let result: country[] = countries;

  if (req.query.name) {
    result = result.filter((country) =>
      country.name.includes(req.query.name as string)
    );
  }

  if (req.query.capital) {
    result = result.filter((country) =>
      country.capital.includes(req.query.capital as string)
    );
  }

  if (req.query.continent) {
    result = result.filter((country) =>
      country.continent.includes(req.query.continent as string)
    );
  }

  if (result !== countries && result.length !== 0) {
    res.status(200).send(result);
  } else {
    res.status(404).send("Country note found");
  }
});

//ENDEPOINT 6

app.post("/countries/create", (req: Request, res: Response) => {
  const newCountry: country = {
    id: Date.now(),
    name: req.body.name,
    capital: req.body.capital,
    continent: req.body.continent,
  };

  const result: country | undefined = countries.find(
    (country) => country.name === req.body.name
  );
  
  let errorCode: number = 400;

  try {
    if (!req.headers.authorization || req.headers.authorization.length < 10) {
      errorCode = 401;
      throw new Error("Chave de identificação inválida");
    }

    if(!newCountry.name || !newCountry.capital || !newCountry.continent){
      errorCode = 422;
      throw new Error("Preencha todos os campos para seguir!");
    }

    if (result) {
      errorCode = 401;
      throw new Error("Esse país já foi computado!");
    }

    countries.push(newCountry);
    res.status(200).send({ message: "Sucess!", country: newCountry });
  } catch (error) {
    res.status(errorCode).send(error.message);
  }
});

//ENDEPOINT 4
app.put("/countries/edit/:id", (req: Request, res: Response) => {
  const result = countries.findIndex(
    (country) => country.id === Number(req.params.id)
  );

  countries[result].name = req.body.name;
  countries[result].capital = req.body.capital;

  if (result) {
    res.status(200).send(req.body);
  } else {
    res.status(404).send("Not found");
  }
});

//EDITPOINT 2
app.get("/countries/:id", (req: Request, res: Response) => {
  const result: country | undefined = countries.find(
    (country) => country.id === Number(req.params.id)
  );

  if (result) {
    res.status(200).send(result);
  } else {
    res.status(404).send("Not found");
  }
});

//EDITPOINT 5

app.delete("/countries/:id", (req: Request, res: Response) => {
  let errorCode: number = 400;

  try {
    if (!req.headers.authorization || req.headers.authorization.length < 10) {
      errorCode = 401;
      throw new Error("Chave de identificação inválida");
    }

    const index: number = countries.findIndex(
      (country) => country.id === Number(req.params.id)
    );

    if (index === -1) {
      errorCode = 404;
      throw new Error("País não encontrado");
    }

    countries.splice(index, 1);
    res.status(200).send("País deletado com sucesso!");
  } catch (error) {
    res.status(errorCode).send(error.message);
  }
});

app.listen(3003, () => {
  console.log("Server is running in http://localhost:3003");
});
