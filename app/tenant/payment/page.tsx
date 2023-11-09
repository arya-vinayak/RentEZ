
import { promises as fs } from "fs";
import path from "path";

import Image from "next/image";
import { z } from "zod";

import { columns } from "./components/columns";
import { DataTable } from "./components/data-table";
import { PSchema } from "./data/schema";
import { PaymentCard } from "@/components/PaymentCard";
import { Payment } from "./data/schema";

// Simulate a database read for tasks.
async function getTasks() {
  const data = await fs.readFile(
    path.join(process.cwd(), "/app/tenant/payment/data/payments.json")
  );

  const tasks = JSON.parse(data.toString());

  return z.array(PSchema).parse(tasks);
}

export default async function TaskPage() {
  
    async function fetchTasks() {
      const tasks = await getTasks();
     return tasks
    }
    const tasks = await fetchTasks();
  

  return (
    <>
      <div className="md:hidden">
        <Image
          src="/examples/tasks-light.png"
          width={1280}
          height={998}
          alt="Playground"
          className="block dark:hidden"
        />
        <Image
          src="/examples/tasks-dark.png"
          width={1280}
          height={998}
          alt="Playground"
          className="hidden dark:block"
        />
      </div>
      <div className="hidden h-full flex-1 flex-col space-y-8 p-8 md:flex">
        <div className="flex items-center justify-between space-y-2">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">Payment History</h2>
            <p className="text-muted-foreground">
              Here&apos;s a list of Payments!
            </p>
          </div>
          <div className="flex items-center space-x-2">
            
          </div>
        </div>
        <DataTable data={tasks} columns={columns} />
        <PaymentCard
          payments={tasks}
        />
      </div>
    </>
  );
}
