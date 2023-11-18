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

const cookieStore = cookies();
const supabase = createClient(cookieStore);

async function getVisitors(id: string | undefined): Promise<Visitor[]> {
  const { data, error } = await supabase.rpc("get_tenant_visitors", {tenant_id: id })
  return data;
}

export default async function AnnouncementPage() {
  
  let { data: {session} } = await supabase.auth.getSession();
  let { data, error } = await supabase.from("announcement").select("*");
  console.log(data);
  let announcements = data;
  let visitors = await getVisitors(session?.user?.id);

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

