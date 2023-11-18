import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import NotificationCard from "@/components/NotificationCard";
import { Announcement } from "@/types/Announcements";
import { Visitor } from "@/types/Visitor";
import VisitorCard from "@/components/VisitorCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cookies } from "next/headers";
import { createClient } from "@/utils/supabase/server";
import AuthButton from "@/components/AuthButton";

async function getVisitors() {
  const tempData: Visitor[] = [
    {
      visitor_name: "John Doe",
      date_of_visit: "2023-11-05",
      time_of_visit: "10:30:00",
      flat_number: "101",
    },
    {
      visitor_name: "Alice Smith",
      date_of_visit: "2023-11-06",
      time_of_visit: "11:00:00",
      flat_number: "102",
    },

    // Add more visitor objects as needed
    {
      visitor_name: "John Doe",
      date_of_visit: "2023-11-05",
      time_of_visit: "14:30:00",
      flat_number: "103",
    },
    {
      visitor_name: "Alice Smith",
      date_of_visit: "2023-11-06",
      time_of_visit: "15:00:00",
      flat_number: "104",
    },
    {
      visitor_name: "John Doe",
      date_of_visit: "2023-11-05",
      time_of_visit: "18:30:00",
      flat_number: "105",
    },
    {
      visitor_name: "Alice Smith",
      date_of_visit: "2023-11-06",
      time_of_visit: "19:00:00",
      flat_number: "106",
    },
  ];
  return tempData;
}

export default async function AnnouncementPage() {
  // const announcements = await getNotifications();
  const visitors = await getVisitors();
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);
  const { data, error } = await supabase.from("announcement").select("*");
  console.log(data);
  let announcements = data;
  return (
    <>
      <Breadcrumb pageName="Home" >
        <AuthButton />
        </Breadcrumb>
      <Tabs defaultValue="announcements" className="space-y-4">
        <TabsList>
          <TabsTrigger value="announcements">Announcements</TabsTrigger>
          <TabsTrigger value="visitors">Visitors</TabsTrigger>
        </TabsList>
        <TabsContent value="announcements" className="mx-auto space-y-4 ">
          <NotificationCard notifications={announcements} />
        </TabsContent>
        <TabsContent value="visitors" className="mx-auto space-y-4">
          <VisitorCard visitors={visitors} />
        </TabsContent>
      </Tabs>
    </>
  );
}
