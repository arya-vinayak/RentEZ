"use server";
import { promises as fs } from "fs";
import path from "path";
import { z } from "zod";
import { MSchema } from "@/types/Maintenance";

async function getTasks() {
  const data = await fs.readFile(
    path.join(process.cwd(), "/app/owner/maintenance/data/tasks.json")
  );

  const tasks = JSON.parse(data.toString());

  return z.array(MSchema).parse(tasks);
}

export async function getData() {
  const data = await getTasks();
  return data;
}
