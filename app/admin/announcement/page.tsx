"use client";
import {columns} from "./components/columns";
import { DataTable } from "./components/data-table";
import { AnnouncementAdd } from "@/components/AnnoucementAdd";
import { Announcement } from "@/types/Announcements";
import { getData } from "./dataRetrieval";
import { useEffect, useState } from "react";


async function getTasks() {
  const data = await getData();
  return data;
}

export default function TasksPage() {
  const [announcements,setAnnouncements] = useState<Announcement[]>([]);

  useEffect(() => {
    getTasks().then((announcements) => setAnnouncements(announcements));
  }, []);

  return (
    <>
      <div className="hidden h-full flex-1 flex-col space-y-8 p-8 md:flex">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">
           Announcements
          </h2>
         
        </div>
        <DataTable data={announcements} columns={columns} />
        <AnnouncementAdd setAnnouncements = {setAnnouncements} />
      </div>
    </>
  );
}
