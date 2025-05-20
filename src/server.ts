import express, { Request, Response } from "express";
import { knex } from "./database/knex";
const app = express();
app.use(express.json());

app.post("/courses", async (request: Request, response: Response) => {
  const { name } = request.body;

  //await knewx.raw("INSERT INTO courses (name) VALUES (?)", [name]);
  await knex("courses").insert({ name });
  return response.json();
});

app.get("/courses", async (request: Request, response: Response) => {
  const courses = await knex("courses").select("*").orderBy("name");
  return response.json(courses);
});

app.put("/courses/:id", async (request: Request, response: Response) => {
  const { id } = request.params;
  const { name } = request.body;

  await knex("courses").where({ id }).update({ name });

  return response.json("atualizado com sucesso");
});

app.delete("/courses/:id", async (request: Request, response: Response) => {
  const { id } = request.params;

  await knex("courses").where({ id }).delete();

  return response.json("deletado com sucesso");
})

app.listen(3000, () => console.log(`Server is running on port 3000`));
