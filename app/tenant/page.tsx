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

async function getNotifications() {
  const tempData: Announcement[] = [
    {
      id: "1",
      date_of_announcement: "2022-01-01",
      announcement_message: "Lorem ipsum dolor sit amet",
      announced_by: "John Doe",
    },
    {
      id: "2",
      date_of_announcement: "2022-01-02",
      announcement_message: "Consectetur adipiscing elit",
      announced_by: "Jane Doe",
    },
    {
      id: "3",
      date_of_announcement: "2022-01-03",
      announcement_message: "Sed do eiusmod tempor incididunt",
      announced_by: "Alice Smith",
    },
    {
      id: "4",
      date_of_announcement: "2022-01-04",
      announcement_message: "Ut enim ad minim veniam",
      announced_by: "Bob Johnson",
    },
    {
      id: "5",
      date_of_announcement: "2022-01-05",
      announcement_message: "Duis aute irure dolor in reprehenderit",
      announced_by: "Charlie Brown",
    },
    {
      id: "6",
      date_of_announcement: "2022-01-06",
      announcement_message: "Excepteur sint occaecat cupidatat non proident",
      announced_by: "David Lee",
    },
    {
      id: "7",
      date_of_announcement: "2022-01-07",
      announcement_message:
        "Sunt in culpa qui officia deserunt mollit anim id est laborum",
      announced_by: "Eva Chen",
    },
    {
      id: "8",
      date_of_announcement: "2022-01-08",
      announcement_message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      announced_by: "Frank Smith",
    },
    {
      id: "9",
      date_of_announcement: "2022-01-09",
      announcement_message:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
      announced_by: "Grace Lee",
    },
    {
      id: "10",
      date_of_announcement: "2022-01-10",
      announcement_message:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
      announced_by: "Henry Johnson",
    },
  ];
;
  return tempData;
}

async function getVisitors(): Promise<Visitor[]> {
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
  const announcements = await getNotifications();
  const visitors = await getVisitors();

  return (
    <>
      <Breadcrumb pageName="Home" />

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

