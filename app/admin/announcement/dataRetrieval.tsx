"use server";
import { promises as fs } from "fs";
import path from "path";
import { z } from "zod";
import { ASchema } from "@/types/Announcements";

async function getTasks() {
  const data = await fs.readFile(
    path.join(process.cwd(), "/app/admin/announcement/data/tasks.json")
  );

  const announcements= JSON.parse(data.toString());

  return z.array(ASchema).parse(announcements);
}

export async function getData() {
  const data = await getTasks();
  return data;
}
