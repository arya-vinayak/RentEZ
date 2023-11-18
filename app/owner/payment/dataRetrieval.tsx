"use server";
import { promises as fs } from "fs";
import path from "path";
import { PSchema } from "@/types/Payment";
import { createClient } from '@/utils/supabase/server';
import { cookies } from 'next/headers';
import { z } from "zod";

//Simulate a database read for tasks.
async function getTasks() {
  const data = await fs.readFile(
    path.join(process.cwd(), "/app/owner/payment/data/payments.json")
  );

  const tasks = JSON.parse(data.toString());

  return z.array(PSchema).parse(tasks);
}

// async function getTasks() {
//   const cookieStore = cookies()
//   const supabase = createClient(cookieStore);
//   const { data: tasks } = await supabase.from("payments").select();    //trasks is variable name, data is a property.

//   if (tasks !== null) {
//     const transformedTasks = tasks.map((task : any) => PSchema.parse({
//       date: String(task.payment_date),  
//       id: String(task.payment_id),       
//       cost: String(task.amount),         
//       status: String(task.payment_status),
//     }));

//     return transformedTasks;
//   }

//   return []; // Return an empty array if tasks is null
// }


//Export tasks data
export async function getData() {
  const data = await getTasks();
  return data;
}
