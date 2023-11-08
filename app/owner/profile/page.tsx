"use client"
import { useState,useEffect } from "react";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb"
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { FiChevronDown as ChevronDownIcon } from 'react-icons/fi'; 
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command"
import { PaperclipIcon } from "lucide-react";

export default async function DemoPage() {
  const [tenantData, setTenantData] = useState({
    TenantID: '12345',
    Email: 'jane@example.com',
    Flat: 'A-101',
    Name: 'Jane Doe',
    Phone: '998001001',
    DOB: 'Feb 06, 1998',
  });

  // Simulate a fetch request to get the tenant details
  useEffect(() => {
    // You can fetch data here and update the 'tenantData' state
    // For now, we'll use the initial dummy data
  }, []);

  
  return (
    <>
      <Breadcrumb pageName="Profile" />
      <Card className="dark:bg-[20-14.3-4.1] text-[#FFFFFF]">
        <CardHeader>
        <CardTitle className="text-black dark:text-white">Tenant Details</CardTitle>

        </CardHeader>
        <CardContent className="grid gap-6">
          {Object.keys(tenantData).map((key) => (
            <div key={key}>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900 dark:text-gray-200">
                  {key.replace(/_/g, ' ')}
                </dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 dark:text-gray-300 sm:col-span-2 sm:mt-0">
                  {tenantData[key]}
                </dd>
              </div>
              {key !== 'tenant_profile_pic' && (
                <div className="border-t dark:border-gray-400" />
              )}
            </div>
          ))}
        </CardContent>
      </Card>
    </>
  );
}
