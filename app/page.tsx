import AuthButton from "../components/AuthButton";
import SignUpUserSteps from "@/components/SignUpUserSteps";
// import Header from '@/components/Header'
import { Button } from "@/components/ui/button";
import Header1 from "@/components/HeaderBar";
import Sidebar from "@/components/Sidebar";
import Link from "next/link";
import { Sun, Moon } from "lucide-react";
//icons
import { GoHome, GoHomeFill } from "react-icons/go";
import { RiLoginBoxFill, RiLoginBoxLine } from "react-icons/ri";
import { SiGooglehome } from "react-icons/si";
import { BiLogInCircle, BiSolidLogIn } from "react-icons/bi";
import { SideNavItemType } from "@/types/sidebarProps";
import { Header1Props } from "@/types/headerProps";
import personWalkin from "@/public/animations/person.json";
import Lottie from "lottie-react";
import Landing from "@/components/Landing";
import { headers, cookies } from "next/headers";
import { createClient } from "@/utils/supabase/server";
// import { useTheme } from "next-themes";

export default async function Index() {
  const cookieStore = cookies();
  // const headerStore = headers();
  const supabase = createClient(cookieStore);
  const {
    data: { session },
  } = await supabase.auth.getSession();
  let role = null;
  if (session) {
    const uid = session?.user?.id;
    const { data } = await supabase
      .from("users")
      .select("role")
      .eq("id", uid)
      .single();
    role = data?.role;
  }
  return (
    // <div className="flex-1 w-full flex flex-col gap-20 items-center ">
    //   <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
    //     <div className="w-full max-w-4xl flex justify-between items-center p-3 text-sm">
    //       <DeployButton />
    //       <Button>Click me</Button>
    //       {isSupabaseConnected && <AuthButton />}
    //     </div>
    //   </nav>

    //   <footer className="w-full border-t border-t-foreground/10 p-8 flex justify-center text-center text-xs">

    //   </footer>
    // </div>
      
    <div
      className={`dark:bg-boxdark-2 dark:text-bodydark min-h-screen flex flex-col `}
    >
      <div>
      <AuthButton />
      </div>
      <Landing userRole={role} />
    </div>
  )}
