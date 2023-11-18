"use client";
import Image from "next/image";
import { columns } from "./components/columns";
import { DataTable } from "./components/data-table";
import { PSchema } from "@/types/Payment";
import { PaymentCard } from "@/components/PaymentCard";
import { Payment } from "@/types/Payment";
import { getData } from "./dataRetrieval";
import { useEffect, useState } from "react";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { createClient } from "@/utils/supabase/client";

export default function TasksPage() {
  const supabase = createClient();
  const getId = async () => {
    const { data: {session} } = await supabase.auth.getSession();
    // console.log(session?.user?.id)
    return session?.user?.id;
  }
  const getTasks = async () => {
    // const { data: {session} } = await supabase.auth.getSession();
    // console.log(session?.user?.id)
    const id = await getId();
    const { data, error } = await supabase.rpc('get_payment', {userid: id}).select('*');
    console.log(data)
    return data;
  }

  const getTotal = async () => {
    // const { data: {session} } = await supabase.auth.getSession();
    // console.log(session?.user?.id)
    const id = await getId();
    const { data, error } = await supabase.rpc('get_owner_pending_rents', {userid: id}).select('*');
    console.log(data)
    return data;
  }

  const [tasks, setTasks] = useState<Payment[] | null>([]);
  const [total, setTotal] = useState<number | null>(null);
  useEffect(() => {
    getTasks().then((tasks) => setTasks(tasks));
    getTotal()
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
          <div className="flex items-center justify-center space-x-2">
            <p className="font-sm">Total Pending Amount: </p>
          </div>
        </div>
        <DataTable data={tasks?tasks:[]} columns={columns} />
        <PaymentCard payments={tasks?tasks:[]} setTasks={setTasks} />
      </div>
    </>
  );
}
