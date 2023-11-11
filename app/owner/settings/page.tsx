"use client";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { TenantForm } from "./tenant-form";
import Image from "next/image";
import ProfilePic from "@/components/ProfilePic";
import { CardTitle, CardContent, Card, CardHeader } from "@/components/ui/card";

export default function DemoPage() {
  return (
    <>
      <Breadcrumb pageName="Settings" />
      <div className="container mx-auto py-10">
        <Card className="dark:bg-[20-14.3-4.1] ">
          <CardHeader>
            <CardTitle className="text-black dark:text-white">
              Update Personal Details
            </CardTitle>
          </CardHeader>
          <CardContent className="grid gap-6">
            <TenantForm />
          </CardContent>
        </Card>

        <Card className="dark:bg-[20-14.3-4.1]  mt-7">
          <CardHeader>
            <CardTitle className="text-black dark:text-white">
              Update Profile Picture
            </CardTitle>
          </CardHeader>
          <CardContent className="grid gap-6">
            <ProfilePic />
          </CardContent>
        </Card>
      </div>
    </>
  );
}
