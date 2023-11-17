"use client";
import Image from "next/image";
import {columns} from "./components/columns";
import { DataTable } from "./components/data-table";
import { VisitorAdd } from "@/components/VisitorAdd";
import { Visitor } from "@/types/Visitor";
import { getData } from "./dataRetrieval";
import { useEffect, useState } from "react";


async function getTasks() {
  const data = await getData();
  return data;
}

export default function TasksPage() {
  const [visitors, setVisitors] = useState<Visitor[]>([]);

  useEffect(() => {
    getTasks().then((visitors) => setVisitors(visitors));
  }, []);

  return (
    <>
      <div className="hidden h-full flex-1 flex-col space-y-8 p-8 md:flex">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">
           Visitors
          </h2>
         
        </div>
        <DataTable data={visitors} columns={columns} />
        <VisitorAdd setVisitors={setVisitors} />
      </div>
    </>
  );
}
