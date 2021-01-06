import express, { Request, Response } from "express";
import cors from "cors";
import { countries, country } from "./countries";

const app = express();

app.use(express.json());
app.use(cors());

app.get("/countries/all", (req: Request, res: Response) => {
  const result = countries.map((country) => ({
    id: country.id,
    name: country.name,
  }));

  res.status(200).send(result);
});

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

app.put("/countries/edit/:id", (req: Request, res: Response) => {
  const result: country | undefined = countries.find(
    (country) => country.id === Number(req.params.id)
  );

  if (result) {
    res.status(200).send(result);
  } else {
    res.status(404).send("Not found");
  }
});

app.get("/countries/:id", (req: Request, res: Response) => {
  const result = countries.findIndex(
    country => country.id === Number(req.params.id)
  );

  countries[result].name = req.body.name
  countries[result].capital = req.body.capital

  if (result) {
    res.status(200).send(result);
  } else {
    res.status(404).send("Not found");
  }
});

app.listen(3003, () => {
  console.log("Server is running in http://localhost:3003");
});
