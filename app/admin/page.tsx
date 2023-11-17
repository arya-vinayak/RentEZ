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
import { Notification } from "@/types/Notification";
import { Visitor } from "@/types/Visitor";
import VisitorCard from "@/components/VisitorCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

async function getNotifications() {
  const tempData: Notification[] = [
    {
      announced_by: "John Doe",
      date_of_announcement: new Date("Nov 5, 2023"),
      announcement_message:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    },
    {
      announced_by: "Alice Smith",
      date_of_announcement: new Date("Nov 6, 2023"),
      announcement_message: "Corporis tenetur dolor quis facere neque quidem.",
    },

    // Add more announcement objects as needed
    {
      announced_by: "John Doe",
      date_of_announcement: new Date("Nov 5, 2023"),
      announcement_message:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    },
    {
      announced_by: "Alice Smith",
      date_of_announcement: new Date("Nov 6, 2023"),
      announcement_message: "Corporis tenetur dolor quis facere neque quidem.",
    },
    {
      announced_by: "John Doe",
      date_of_announcement: new Date("Nov 5, 2023"),
      announcement_message:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem eaque labore nemo! Et, illum optio. Nesciunt, cumque, id quo iste quis ea iusto reprehenderit molestias fugit delectus mollitia quia harum dignissimos? Repellat soluta ipsa in, quam expedita laudantium illum voluptas assumenda minima magni voluptatem officia, quae temporibus corrupti rem placeat",
    },
    {
      announced_by: "Alice Smith",
      date_of_announcement: new Date("Nov 6, 2023"),
      announcement_message: "Corporis tenetur dolor quis facere neque quidem.",
    },
  ];
  return tempData;
}

async function getVisitors() {
  const tempData: Visitor[] = [
    {
      visitor_name: "John Doe",
      date_of_visit: new Date("Nov 5, 2023").toISOString().slice(0, 10),
      time_of_visit: new Date("Nov 5, 2023 10:30:00").toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}),
      flat_number: "101"
    },
    {
      visitor_name: "Alice Smith",
      date_of_visit: new Date("Nov 6, 2023").toISOString().slice(0, 10),
      time_of_visit: new Date("Nov 6, 2023 11:00:00").toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}),
      flat_number: "102"
    },

    // Add more visitor objects as needed
    {
      visitor_name: "John Doe",
      date_of_visit: new Date("Nov 5, 2023").toISOString().slice(0, 10),
      time_of_visit: new Date("Nov 5, 2023 14:30:00").toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}),
      flat_number: "103"
    },
    {
      visitor_name: "Alice Smith",
      date_of_visit: new Date("Nov 6, 2023").toISOString().slice(0, 10),
      time_of_visit: new Date("Nov 6, 2023 15:00:00").toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}),
      flat_number: "104"
    },
    {
      visitor_name: "John Doe",
      date_of_visit: new Date("Nov 5, 2023").toISOString().slice(0, 10),
      time_of_visit: new Date("Nov 5, 2023 18:30:00").toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}),
      flat_number: "105"
    },
    {
      visitor_name: "Alice Smith",
      date_of_visit: new Date("Nov 6, 2023").toISOString().slice(0, 10),
      time_of_visit: new Date("Nov 6, 2023 19:00:00").toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}),
      flat_number: "106"
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
