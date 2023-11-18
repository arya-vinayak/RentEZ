"use client";
import { columns } from "./components/columns";
import { DataTable } from "./components/data-table";
import { PaymentCard } from "@/components/PaymentCard";
import { Payment } from "@/types/Payment";
import { getData } from "./dataRetrieval";
import { useEffect, useState } from "react";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { createClient } from "@/utils/supabase/client";

// async function getTasks() {
//   const data = await getData();
//   return data;
// }

export default function TasksPage() {
  const supabase = createClient();
  const getTasks = async () => {
    const { data: {session} } = await supabase.auth.getSession();
    // console.log(session?.user?.id)
    const { data, error } = await supabase.rpc('get_payment', {userid: session?.user?.id}).select('*');
    // console.log(data)
    return data;
  }
  const [tasks, setTasks] = useState<Payment[] | null>([]);

  useEffect(() => {
    getTasks().then((tasks) => setTasks(tasks));
  }, []);

  return (
    <>
      <div className="hidden h-full flex-1 flex-col space-y-8 p-8 md:flex">
        <div className="flex items-center justify-between space-y-2">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">
              Payment History
            </h2>
            <p className="text-muted-foreground">
              Here&apos;s a list of Payments!
            </p>
          </div>
          <div className="flex items-center space-x-2"></div>
        </div>
        <DataTable data={tasks?tasks:[]} columns={columns} />
        <PaymentCard payments={tasks?tasks:[]} setTasks={setTasks} />
      </div>
    </>
  );
}
