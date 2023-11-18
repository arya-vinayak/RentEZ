"use client";
import { LandingProps } from "@/types/Landing";
import SignUpUserSteps from "@/components/SignUpUserSteps";
// import Header from '@/components/Header'
import { Button } from "@/components/ui/button";
import userContext from "@/contexts/userContext";
import Sidebar from "@/components/Sidebar";
import Link from "next/link";
import AuthButton from "./AuthButton";
//icons
import { GoHome, GoHomeFill } from "react-icons/go";
import { RiLoginBoxFill, RiLoginBoxLine } from "react-icons/ri";
import { BiLogInCircle, BiSolidLogIn } from "react-icons/bi";
import { SideNavItemType } from "@/types/sidebarProps";
import personWalkin from "@/public/animations/person.json";
import Lottie from "lottie-react";
import Header from "./Header";
import { createClient } from "@/utils/supabase/client";
import { useRouter } from "next/navigation";

export default function Landing({ userRole, userName, children }: LandingProps) {
  const homeUrl = userRole ? `/${userRole}` : "/";
  const supabase = createClient();
  const router = useRouter();
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
  const signOut = async () => {
    console.log("signout");
    await supabase.auth.signOut();
    router.push("/");
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
              {userName ? (
                <div className="grid grid-cols-3 items-center justify-center my-8">
                <p className="col-span-2 py-6 px-3 text-center font-medium text-xl"> Hey, {userName}! </p>
                <div className="col-span-1 text-xl ">
                  {children}
                </div>
              </div>
              ) : (
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
              )}
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
