"use server"
import { promises as fs } from "fs";
import path from "path";
import { z } from "zod";
import { PSchema } from "./data/schema";



// Simulate a database read for tasks.
async function getTasks() {
  const data = await fs.readFile(
    path.join(process.cwd(), "/app/tenant/payment/data/payments.json")
  );

  const tasks = JSON.parse(data.toString());

  return z.array(PSchema).parse(tasks);
}

//Export tasks data
export async function getData() {
  const data = await getTasks();
  return data;
}

