"use client";
import Image from "next/image";
import { columns } from "./components/columns";
import { DataTable } from "./components/data-table";
import { MaintenanceCard } from "@/components/MaintenanceCard";
import { Maintain } from "./data/schema";
import { getData } from "./dataRetrieval";
import { useEffect, useState } from "react";

async function getTasks() {
  const data = await getData();
  return data;
}

export default function TasksPage() {
  const [tasks, setTasks] = useState<Maintain[]>([]);

  useEffect(() => {
    getTasks().then((tasks) => setTasks(tasks));
  }, []);

  return (
    <>
      <div className="hidden h-full flex-1 flex-col space-y-8 p-8 md:flex">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">
            Maintenance Request History
          </h2>
          <p className="text-muted-foreground">
            Here&apos;s a list of Maintenance Requests!
          </p>
        </div>
        <DataTable data={tasks} columns={columns} />
        <MaintenanceCard setTasks={setTasks} />
      </div>
    </>
  );
}
