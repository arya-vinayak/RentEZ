"use client";
import { LandingProps } from "@/types/Landing";
import SignUpUserSteps from "@/components/SignUpUserSteps";
// import Header from '@/components/Header'
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import Sidebar from "@/components/Sidebar";
import Link from "next/link";
//icons
import { GoHome, GoHomeFill } from "react-icons/go";
import { RiLoginBoxFill, RiLoginBoxLine } from "react-icons/ri";
import { BiLogInCircle, BiSolidLogIn } from "react-icons/bi";
import { SideNavItemType } from "@/types/sidebarProps";
import personWalkin from "@/public/animations/person.json";
import Lottie from "lottie-react";
import Header from "./Header";
import { createClient } from "@/utils/supabase/client";

async function getRole() {
  const supabase = createClient();
  const { data: {session} } = await supabase.auth.getSession();
  if(!session) return null;
  const uid = session?.user?.id;
  const { data } = await supabase.from("users").select("role").eq("id", uid).single();
  return data;
}


export default function Landing({ userRole }: LandingProps) {
  const homeUrl = userRole ? `/${userRole}` : "/";
  const sidebarItmes: SideNavItemType[] = [
    {
      icon: {
        icon: <GoHome />,
        fillIcon: <GoHomeFill />,
      },
      label: "Home",
      href: homeUrl,
    },
    // {
    //   icon: {
    //     icon: <BiLogInCircle />,
    //     fillIcon: <BiSolidLogIn />,
    //   },
    //   label: "Login",
    //   href: "/login",
    // },
    // {
    //   icon: {
    //     icon: <RiLoginBoxLine />,
    //     fillIcon: <RiLoginBoxFill />,
    //   },
    //   label: "Signup",
    //   href: "/signup",
    // },
  ];
  if(!userRole) {
    sidebarItmes.push({
      icon: {
        icon: <BiLogInCircle />,
        fillIcon: <BiSolidLogIn />,
      },
      label: "Login",
      href: "/login",
    });
    sidebarItmes.push({
      icon: {
        icon: <RiLoginBoxLine />,
        fillIcon: <RiLoginBoxFill />,
      },
      label: "Signup",
      href: "/signup",
    });
  }
  return (
    <div
      className={`dark:bg-boxdark-2 dark:text-bodydark overflow-hidden`}
    >
      <div className="flex overflow-hidden">
        {/* <!-- ===== Sidebar Start ===== --> */}
        <Sidebar sidebarItems={sidebarItmes} />
        {/* <!-- ===== Sidebar End ===== --> */}
        {/* <!-- ===== Content Area Start ===== --> */}
        <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
          {/* <!-- ===== Header Start ===== --> */}
          <Header />
          {/* <!-- ===== Header End ===== --> */}
          {/* <!-- ===== Main Content Start ===== --> */}
          <main className="grid grid-cols-6 gap-3 mx-auto items-center justify-center">
            <div className="col-span-2 font-semibold text-6xl text-black dark:text-white">
              Welcome to <br />
              <span className="font-bold text-8xl">
                Rent{" "}
                <span className="font-bold text-green-400 text-8xl">EZ</span>
              </span>
              <p className="text-2xl my-2 text-center text-gray-600">
                Making Renting Easy
              </p>
              <div className="grid grid-cols-4 gap-2 items-center justify-center my-8">
                <Button
                  variant="outline"
                  className="col-span-2 py-6 px-3 text-xl"
                  asChild
                >
                  <Link href="/login">Log In</Link>
                </Button>
                <Button
                  variant="outline"
                  className="col-span-2 py-6 px-3 text-xl bg-green-400 text-white"
                  asChild
                >
                  <Link href="/signup">Get Started</Link>
                </Button>
              </div>
            </div>
            <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10 col-span-4">
              <Lottie
                animationData={personWalkin}
                style={{ height: 600, width: 600 }}
                loop={true}
              />
            </div>
          </main>
          {/* <!-- ===== Main Content End ===== --> */}
        </div>
        {/* <!-- ===== Content Area End ===== --> */}
      </div>
    </div>
  );
}
