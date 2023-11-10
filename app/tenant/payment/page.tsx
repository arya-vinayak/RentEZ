"use client"
import Image from "next/image";
import { columns } from "./components/columns";
import { DataTable } from "./components/data-table";
import { PSchema } from "./data/schema";
import { PaymentCard } from "@/components/PaymentCard";
import { Payment } from "./data/schema";
import { getData } from "./dataRetrieval";
import { useEffect,useState } from "react";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";


async function getTasks() {
    const data = await getData();
    return data;
    }

export default function TasksPage()
{
    
    const [tasks, setTasks] = useState<Payment[]>([]);

    useEffect(() => {
        getTasks().then((tasks) => setTasks(tasks));
    }, []);


    return(
        <>
      
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
          setTasks={setTasks}
        />
      </div>
    </>
    )
    
}