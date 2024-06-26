import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("user").del();

    // Inserts seed entries
    await knex("user").insert([
        { name: "Razin", email: "razin@gmail.com" },
        { name: "Kanda Sorata", email: "kandasorata@gmail.com" },
        { name: "Frieren", email: "frieren@gmail.com"}
    ]);
};
