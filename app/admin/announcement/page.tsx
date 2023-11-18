"use client";
import { DataTable } from "./components/data-table";
import { AnnouncementAdd } from "@/components/AnnoucementAdd";
import { Announcement } from "@/types/Announcements";
import { getData } from "./dataRetrieval";
import { useEffect, useState } from "react";
import { ColumnDef } from "@tanstack/react-table";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { DataTableColumnHeader } from "./components/data-table-column-header";
import { DataTableRowActions } from "./components//data-table-row-actions";


async function getTasks() {
  const data = await getData();
  return data;
}

export default function TasksPage() {
  const [announcements,setAnnouncements] = useState<Announcement[]>([]);
  useEffect(() => {
    getTasks().then((announcements) => setAnnouncements(announcements));
  }, []);

  // useEffect(() => {
  //   console.log(announcements);
  // }, [announcements]);

  const handleDeleteRow = (rowId: string) => {
    // Implement the logic to delete the row with the specified ID from your data
    // For example:
    const updatedAnnouncements = announcements.filter(
      (announcement) => announcement.id !== rowId
    );
    setAnnouncements(updatedAnnouncements);
    console.log(updatedAnnouncements);
  };


  const columns: ColumnDef<Announcement>[] = [
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
      accessorKey: "id",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="ID" />
      ),
      cell: ({ row }) => <div className="w-[80px]">{row.getValue("id")}</div>,
      enableSorting: false,
      enableHiding: false,
    },
    {
      accessorKey: "date_of_announcement",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Date" />
      ),
      cell: ({ row }) => (
        <div className="w-[80px]">{row.getValue("date_of_announcement")}</div>
      ),
      enableSorting: false,
      enableHiding: false,
    },
    {
      accessorKey: "announcement_message",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Message" />
      ),
      cell: ({ row }) => (
        <div className="w-[80px]">{row.getValue("announcement_message")}</div>
      ),
      enableSorting: false,
      enableHiding: false,
    },
    {
      accessorKey: "announced_by",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Block Admin" />
      ),
      cell: ({ row }) => (
        <div className="w-[80px]">{row.getValue("announced_by")}</div>
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
          <h2 className="text-2xl font-bold tracking-tight">Announcements</h2>
        </div>
        <AnnouncementAdd setAnnouncements={setAnnouncements} />
        <DataTable data={announcements} columns={columns} />
      </div>
    </>
  );
}
