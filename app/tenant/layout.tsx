"use client"
import Header1 from "@/components/HeaderBar";
import Sidebar from "@/components/Sidebar";


//icons
import { GoHome, GoHomeFill } from "react-icons/go";
import { RiArrowLeftDoubleFill } from "react-icons/ri";
import { HiUsers } from "react-icons/hi";
import { HiOutlineUsers } from "react-icons/hi2";
import { BiSolidUser, BiUser } from "react-icons/bi";
import { PiNotepadFill, PiNotepad } from "react-icons/pi";
import { VscSettingsGear } from "react-icons/vsc";
import { SiGooglehome } from "react-icons/si";
import {SideNavItemType} from "@/types/sidebarProps";
import {Header1Props} from "@/types/headerProps";


const sidebarItmes: SideNavItemType[] = [
  {
    icon: {
      icon: <GoHome />,
      fillIcon: <GoHomeFill />
    },
    label: "Home",
    href: "/tenant"
  },
  {
    icon: {
      icon: <PiNotepad />,
      fillIcon: <PiNotepadFill />
    },
    label: "Payments",
    href: "/tenant/payment"
  },

  {
    icon: {
      icon: <HiOutlineUsers />,
      fillIcon: <HiUsers />
    },
    label: "Maintenance",
    href: "/tenant/maintenance"
  },

  {
    icon: {
      icon: <BiUser />,
      fillIcon: <BiSolidUser />
    },
    label: "Profile ",
    href: "/tenant/profile"
  },
  {
    icon: {
      icon: <VscSettingsGear />,
      fillIcon: <VscSettingsGear />
    },
    label: "Settings",
    href: "/tenant/settings"
  }
];


const headerProps: Header1Props = {
  userType: "tenant",
   }



export default function RootLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    console.log(sidebarItmes)
    return (
        //   <main>
        //     <div className="flex h-screen overflow-hidden">
        //     <Header1 />
        //     {children}
        //   </main>
        <div className="dark:bg-boxdark-2 dark:text-bodydark">
        
            <div className="flex h-screen overflow-hidden">
              {/* <!-- ===== Sidebar Start ===== --> */}
              <Sidebar sidebarItems={sidebarItmes}/>
              {/* <!-- ===== Sidebar End ===== --> */}

              {/* <!-- ===== Content Area Start ===== --> */}
              <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
                {/* <!-- ===== Header Start ===== --> */}
                <Header1 {...headerProps}/>
                {/* <!-- ===== Header End ===== --> */}

                {/* <!-- ===== Main Content Start ===== --> */}
                <main>
                  <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
                    {children}
                  </div>
                </main>
                {/* <!-- ===== Main Content End ===== --> */}
              </div>
              {/* <!-- ===== Content Area End ===== --> */}
            </div>
          
        </div>
    )


  }