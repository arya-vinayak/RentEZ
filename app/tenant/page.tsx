"use client";
import { useEffect,useState } from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";

import NotificationCard from "@/components/NotificationCard";
import { Notification } from "@/types/Notification";
import Loading from "./loading";

export default function Tenant()
{

  const [announcements, setAnnouncements] = useState<Notification[]>([]);

  useEffect(() => {
    // Temporary data (you can replace this with your actual data)
    const tempData:Array<Notification> = [
      {
        announced_by: 'John Doe',
        date_of_announcement: 'Nov 5, 2023',
        announcement_message: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
      },
      {
        announced_by: 'Alice Smith',
        date_of_announcement: 'Nov 6, 2023',
        announcement_message: 'Corporis tenetur dolor quis facere neque quidem.',
      },

      // Add more announcement objects as needed
      {
        announced_by: 'John Doe',
        date_of_announcement: 'Nov 5, 2023',
        announcement_message: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
      },
      {
        announced_by: 'Alice Smith',
        date_of_announcement: 'Nov 6, 2023',
        announcement_message: 'Corporis tenetur dolor quis facere neque quidem.',
      },
      {
        announced_by: 'John Doe',
        date_of_announcement: 'Nov 5, 2023',
        announcement_message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem eaque labore nemo! Et, illum optio. Nesciunt, cumque, id quo iste quis ea iusto reprehenderit molestias fugit delectus mollitia quia harum dignissimos? Repellat soluta ipsa in, quam expedita laudantium illum voluptas assumenda minima magni voluptatem officia, quae temporibus corrupti rem placeat',
      },
      {
        announced_by: 'Alice Smith',
        date_of_announcement: 'Nov 6, 2023',
        announcement_message: 'Corporis tenetur dolor quis facere neque quidem.',
        
      }
    ];

    setAnnouncements((prev: Notification[]) => {
      // Update the announcements array based on the previous state (prev)
      return [
        ...tempData,  // You can use the previous announcements
      ];
    });

  }, []);


    return (
      <>

      <Breadcrumb pageName="Home" />
      <Card className="dark:bg-[20-14.3-4.1] text-[#FFFFFF]">
        <CardHeader>
        <CardTitle className="text-black dark:text-white">Announcements</CardTitle>

        </CardHeader>
        <CardContent className="grid gap-6">
        {announcements.map((announcement, index) => (
        <NotificationCard
          key={index}
          announced_by={announcement.announced_by}
          date_of_announcement={announcement.date_of_announcement}
          announcement_message={announcement.announcement_message}
        />
      ))}

        </CardContent>
      </Card>
    </>)
}

