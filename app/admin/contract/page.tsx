"use client";
import Image from "next/image";
//import {columns} from "./components/columns";
import { DataTable } from "./components/data-table";
import { VisitorAdd } from "@/components/VisitorAdd";
import { Contract } from "@/types/Contract";
import { getData } from "./dataRetrieval";
import { useEffect, useState } from "react";

import { ColumnDef } from "@tanstack/react-table";
import { Checkbox } from "@/components/ui/checkbox";
import { DataTableColumnHeader } from "./components/data-table-column-header";
import { DataTableRowActions } from "./components/data-table-row-actions";
import { ContractAdd } from "@/components/ContractAdd";

async function getTasks() {
  const data = await getData();
  return data;
}

export default function TasksPage() {
  const [contracts, setContracts] = useState<Contract[]>([]);

  useEffect(() => {
    getTasks().then((contracts) => setContracts(contracts));
  }, []);

  const handleDeleteRow = (rowId: string) => {
    // Implement the logic to delete the row with the specified ID from your data
    // For example:
    const updatedContracts = contracts.filter(
      (contract) => contract.tenant_id !== rowId
    );
    setContracts(updatedContracts);
  };

  const columns: ColumnDef<Contract>[] = [
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
      accessorKey: "tenant_id",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Tenant ID" />
      ),
      cell: ({ row }) => (
        <div className="w-[80px]">{row.getValue("tenant_id")}</div>
      ),
      enableSorting: false,
      enableHiding: false,
    },
    {
      accessorKey: "owner_id",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Owner ID" />
      ),
      cell: ({ row }) => (
        <div className="w-[80px]">{row.getValue("owner_id")}</div>
      ),
      enableSorting: false,
      enableHiding: false,
    },
    {
      accessorKey: "start_date",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Start Date" />
      ),
      cell: ({ row }) => (
        <div className="w-[80px]">{row.getValue("start_date")}</div>
      ),
      enableSorting: false,
      enableHiding: false,
    },
    {
      accessorKey: "end_date",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="End Date" />
      ),
      cell: ({ row }) => (
        <div className="w-[80px]">{row.getValue("end_date")}</div>
      ),
      enableSorting: false,
      enableHiding: false,
    },
    {
      id: "actions",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Options" />
      ),
      cell: ({ row }) => (
        <DataTableRowActions row={row} onDeleteRow={handleDeleteRow} />
      ),
    },
  ];

  return (
    <>
      <div className="hidden h-full flex-1 flex-col space-y-8 p-8 md:flex">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Contracts</h2>
        </div>
        <ContractAdd setContracts={setContracts} />
        <DataTable
          data={contracts}
          columns={columns}
          onDeleteRow={handleDeleteRow}
        />
      </div>
    </>
  );
}
