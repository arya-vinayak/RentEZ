"use client";
import Image from "next/image";
import { columns } from "./components/columns";
import { DataTable } from "./components/data-table";
import { Maintain } from "@/types/Maintenance";
import { getData } from "./dataRetrieval";
import { useEffect, useState } from "react";
import { MaintenanceCard } from "@/components/MaintenanceCard";
import { createClient } from "@/utils/supabase/client";
// async function getTasks() {
//   const data = await getData();
//   return data;
// }

export default function TasksPage() {
  const supabase = createClient();
  const getTasks = async () => {
    const { data: {session}} = await supabase.auth.getSession();
    const { data, error } = await supabase.rpc('get_maintenances',{userid: session?.user.id}).select('*');
    if (error) {
      console.error(error);
    }
    // console.log(data);
    return data;
  };
  const [tasks, setTasks] = useState<Maintain[]>([]);

  useEffect(() => {
    getTasks().then((tasks) => setTasks(tasks ? tasks : []));
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
        <MaintenanceCard setTasks={setTasks} owner ={false} />
        <DataTable data={tasks} columns={columns} />
      </div>
    </>
  );
}
