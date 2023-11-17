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
    <div className={`dark:bg-boxdark-2 dark:text-bodydark`}>
      <AuthButton />
      <Landing userRole={role} />
    </div>
  );
}
