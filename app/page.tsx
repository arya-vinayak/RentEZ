import AuthButton from "../components/AuthButton";
import Landing from "@/components/Landing";
import { headers, cookies } from "next/headers";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
// import { useTheme } from "next-themes";

export default async function Index() {
  const cookieStore = cookies();
  // const headerStore = headers();
  const supabase = createClient(cookieStore);
  const {
    data: { session },
  } = await supabase.auth.getSession();
  let role,
    username = null;
  if (session) {
    console.log(session)
    console.log(session?.user)
    const uid = session?.user?.id;
    const { data } = await supabase
      .from("users")
      .select("role, username")
      .eq("id", uid)
      .single();
    role = data?.role;
    username = data?.username;
  }

  const signOut = async () => {
    "use server";

    const cookieStore = cookies();
    const supabase = createClient(cookieStore);
    await supabase.auth.signOut();
    return redirect("/login");
  };
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
      <Landing userRole={role} userName={username}>
        <AuthButton />
      </Landing>
    </div>
  );
}
