"use client"

import Breadcrumb from "./Breadcrumbs/Breadcrumb"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  import { Profile } from "@/types/Profile"





export default function ProfileCard(tenantData:Profile)
{
    return(
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
        
    )
}



