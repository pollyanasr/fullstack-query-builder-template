import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  // await knex("table_name").del();

  // Inserts seed entries
  await knex("courses").insert([
    { name: "Git" },
    { name: "Node.js" },
    { name: "Banco de dados" },
  ]);
}
