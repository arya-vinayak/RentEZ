"use client"
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb"
import { TenantForm } from "./tenant-form"
import Image from "next/image"
import ProfilePic from "@/components/ProfilePic"
import { CardTitle,CardContent,Card,CardHeader } from "@/components/ui/card"

export default function DemoPage() {
  
    return (<>
          <Breadcrumb pageName="Settings" />
    <div className="container mx-auto py-10">
    <Card className="dark:bg-[20-14.3-4.1] ">
        <CardHeader>
        <CardTitle className="text-black dark:text-white">Update Personal Details</CardTitle>

        </CardHeader>
        <CardContent className="grid gap-6">
        <TenantForm/>
        </CardContent>
      </Card>

      <Card className="dark:bg-[20-14.3-4.1]  mt-7">
        <CardHeader>
        <CardTitle className="text-black dark:text-white">Update Profile Picture</CardTitle>

        </CardHeader>
        <CardContent className="grid gap-6">
        <ProfilePic/>
        </CardContent>
      </Card>
         
        
      </div>
      </>
      
    )
  }




//   <div className="col-span-5 xl:col-span-2">
//   <div className="rounded-sm border border-stroke bg-black shadow-default dark:border-strokedark dark:bg-boxdark">
//     <div className="border-b border-stroke py-4 px-7 dark:border-strokedark">
//       <h3 className="font-medium text-black dark:text-white">Your Photo</h3>
//     </div>
//     <div className="p-7">
//       <form action="#">
//         <div className="mb-4 flex items-center gap-3">
//           <div className="h-14 w-14 rounded-full">
//             <Image
//               src="/img/shadcn.jpg"
//               width={55}
//               height={55}
//               alt="User"
//             />
//           </div>
//           <div>
//             <span className="mb-1.5 text-black dark:text-white">
//               Edit your photo
//             </span>
//             <span className="flex gap-2.5">
//               <button className="text-sm hover:text-primary">Delete</button>
//               <button className="text-sm hover:text-primary">Update</button>
//             </span>
//           </div>
//         </div>

//         <label
//           htmlFor="fileInput"
//           className="relative mb-5.5 block w-full cursor-pointer appearance-none rounded border-2 border-dashed border-primary bg-gray py-4 px-4 dark:bg-meta-4 sm:py-7.5"
//         >
//           <input
//             id="fileInput"
//             type="file"
//             accept="image/*"
//             className="absolute inset-0 z-50 m-0 h-full w-full cursor-pointer p-0 opacity-0 outline-none"
//           />
//           <div className="flex flex-col items-center justify-center space-y-3">
//             <span className="flex h-10 w-10 items-center justify-center rounded-full border border-stroke bg-white dark:border-strokedark dark:bg-boxdark">
//               <svg
//                 width="16"
//                 height="16"
//                 viewBox="0 0 16 16"
//                 fill="none"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 {/* ... SVG Path */}
//               </svg>
//             </span>
//             <p>
//               <span className="text-primary">Click to upload</span> or drag and drop
//             </p>
//             <p className="mt-1.5">SVG, PNG, JPG, or GIF</p>
//             <p>(max, 800 X 800px)</p>
//           </div>
//         </label>

//         <div className="flex justify-end gap-4.5">
//           <button
//             className="flex justify-center rounded border border-stroke py-2 px-6 font-medium text-black hover:shadow-1 dark:border-strokedark dark:text-white"
//             type="submit"
//           >
//             Cancel
//           </button>
//           <button
//             className="flex justify-center rounded bg-primary py-2 px-6 font-medium text-gray hover:bg-opacity-95"
//             type="submit"
//           >
//             Save
//           </button>
//         </div>
//       </form>
//     </div>
//   </div>
// </div>