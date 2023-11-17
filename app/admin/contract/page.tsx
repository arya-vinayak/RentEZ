"use client";
import Image from "next/image";
import {columns} from "./components/columns";
import { DataTable } from "./components/data-table";
import { VisitorAdd } from "@/components/VisitorAdd";
import { Contract } from "@/types/Contract";
import { getData } from "./dataRetrieval";
import { useEffect, useState } from "react";


async function getTasks() {
  const data = await getData();
  return data;
}

export default function TasksPage() {
  const [contracts, setContracts] = useState<Contract[]>([]);

  useEffect(() => {
    getTasks().then((contracts) => setContracts(contracts));
  }, []);

  return (
    <>
      <div className="hidden h-full flex-1 flex-col space-y-8 p-8 md:flex">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">
           Contracts
          </h2>
         
        </div>
        <DataTable data={contracts} columns={columns} />
        
      </div>
    </>
  );
}
