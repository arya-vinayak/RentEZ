"use client";
import Image from "next/image";

import { DataTable } from "./components/data-table";
import { Maintain } from "@/types/Maintenance";
import { getData } from "./dataRetrieval";
import { useEffect, useState } from "react";
import { ColumnDef } from "@tanstack/react-table";

import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { pstatuses, statuses } from "./data/data";
import { DataTableColumnHeader } from "./components/data-table-column-header";
import { DataTableRowActions } from "./components/data-table-row-actions";



async function getTasks() {
  const data = await getData();
  return data;
}

export default function TasksPage() {
  const [tasks, setTasks] = useState<Maintain[]>([]);

  useEffect(() => {
    getTasks().then((tasks) => setTasks(tasks));
  }, []);


  const columns: ColumnDef<Maintain>[] = [
    {
      id: "select",
      header: ({ table }) => (
        <Checkbox
          checked={table.getIsAllPageRowsSelected()}
          onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
          aria-label="Select all"
          className="translate-y-[2px]"
        />
      ),
      cell: ({ row }) => (
        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={(value) => row.toggleSelected(!!value)}
          aria-label="Select row"
          className="translate-y-[2px]"
        />
      ),
      enableSorting: false,
      enableHiding: false,
    },
    {
      accessorKey: "date",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Date" />
      ),
      cell: ({ row }) => <div className="w-[80px]">{row.getValue("date")}</div>,
      enableSorting: false,
      enableHiding: false,
    },
    {
      accessorKey: "flat_number",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Flat No" />
      ),
      cell: ({ row }) => {
        return (
          <div className="flex space-x-2">
            <span className="max-w-[500px] truncate font-medium">
              {row.getValue("flat_number")}
            </span>
          </div>
        );
      },
    },
    {
      accessorKey: "description",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Title" />
      ),
      cell: ({ row }) => {
        return (
          <div className="flex space-x-2">
            <span className="max-w-[500px] truncate font-medium">
              {row.getValue("description")}
            </span>
          </div>
        );
      },
    },
    {
      accessorKey: "cost",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Cost" />
      ),
      cell: ({ row }) => <div className="w-[80px]">{row.getValue("cost")}</div>,
      enableSorting: false,
      enableHiding: false,
    },
    {
      accessorKey: "maintenance_status",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Status" />
      ),
      cell: ({ row }) => {
        const status = statuses.find(
          (status) => status.value === row.getValue("maintenance_status")
        );

        if (!status) {
          return null;
        }

        return (
          <div className="flex w-[100px] items-center">
            {status.icon && (
              <status.icon className="mr-2 h-4 w-4 text-muted-foreground" />
            )}
            <span>{status.label}</span>
          </div>
        );
      },
      filterFn: (row, id, value) => {
        return value.includes(row.getValue(id));
      },
    },
    {
      accessorKey: "maintenance_payment_status",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Payment Status" />
      ),
      cell: ({ row }) => {
        const status = pstatuses.find(
          (status) =>
            status.value === row.getValue("maintenance_payment_status")
        );

        if (!status) {
          return null;
        }

        return (
          <div className="flex w-[100px] items-center">
            {status.icon && (
              <status.icon className="mr-2 h-4 w-4 text-muted-foreground" />
            )}
            <span>{status.label}</span>
          </div>
        );
      },
      filterFn: (row, id, value) => {
        return value.includes(row.getValue(id));
      },
    },
    {
      id: "actions",
      cell: ({ row }) => <DataTableRowActions row={row} />,
    },
  ];


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
        <DataTable data={tasks} columns={columns} setTasks = {setTasks}/>
      </div>
    </>
  );
}
