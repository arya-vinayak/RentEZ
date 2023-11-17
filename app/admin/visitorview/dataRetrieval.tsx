"use server";
import { promises as fs } from "fs";
import path from "path";
import { z } from "zod";
import { VSchema } from "@/types/Visitor";

async function getTasks() {
  const data = await fs.readFile(
    path.join(process.cwd(), "/app/admin/VisitorView/data/tasks.json")
  );

  const tasks = JSON.parse(data.toString());

  return z.array(VSchema).parse(tasks);
}

export async function getData() {
  const data = await getTasks();
  return data;
}
