"use client";
import { DataTable } from "./components/data-table";
import { PaymentCard } from "@/components/PaymentCard";
import { Payment } from "@/types/Payment";
import { getData } from "./dataRetrieval";
import { useEffect, useState } from "react";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { ColumnDef } from "@tanstack/react-table";
import { Checkbox } from "@/components/ui/checkbox";
import { statuses } from "./data/data";
import { DataTableColumnHeader } from "./components/data-table-column-header";
import { DataTableRowActions } from "./components/data-table-row-actions";
import { createClient } from "@/utils/supabase/client";

async function getTasks() {
  const data = await getData();
  return data;
}

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

  const columns: ColumnDef<Payment>[] = [
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
      accessorKey: "id",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Payment ID" />
      ),
      cell: ({ row }) => <div className="w-[80px]">{row.getValue("id")}</div>,
      enableSorting: false,
      enableHiding: false,
    },
    {
      accessorKey: "tenant",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Tenant Name" />
      ),
      cell: ({ row }) => (
        <div className="w-[80px]">{row.getValue("tenant")}</div>
      ),
      enableSorting: false,
      enableHiding: false,
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
      accessorKey: "status",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Status" />
      ),
      cell: ({ row }) => {
        const status = statuses.find(
          (status) => status.value === row.getValue("status")
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
      accessorKey: "type",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Type" />
      ),
      cell: ({ row }) => <div className="w-[80px]">{row.getValue("type")}</div>,
      enableSorting: false,
      enableHiding: false,
    },
    {
      id: "actions",
      cell: ({ row }) => <DataTableRowActions row={row} />,
    },
  ];
  const updatePayments = async(id: string) => {
    const { data, error } = await supabase.from("payments").update({payment_status: "success"}).eq("payment_id", id);
    console.log(data)
    if (error) {
      console.error(error)
    }
  }

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
        <DataTable data={tasks ? tasks : []} columns={columns} setTasks={setTasks} updateTasks={updatePayments}/>
      </div>
    </>
  );
}
