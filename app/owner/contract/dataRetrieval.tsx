"use server";
import { promises as fs } from "fs";
import path from "path";
import { z } from "zod";
import { CSchema } from "@/types/Contract";

async function getTasks() {
  const data = await fs.readFile(
    path.join(process.cwd(), "/app/owner/contract/data/contracts.json")
  );

  const announcements = JSON.parse(data.toString());

  return z.array(CSchema).parse(announcements);
}

export async function getData() {
  const data = await getTasks();
  return data;
}
