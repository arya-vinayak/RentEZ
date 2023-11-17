import Link from "next/link";
import { headers, cookies } from "next/headers";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import LogInForm from "@/components/LogInForm";
import { FcGoogle } from "react-icons/fc";
import Anime from "../../components/Anime";

export default function Login({
  searchParams,
}: {
  searchParams: { message: string };
}) {
  const signUp = async (formData: FormData) => {
    "use server";

    const origin = headers().get("origin");
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const cookieStore = cookies();
    const supabase = createClient(cookieStore);

    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${origin}/auth/callback`,
      },
    });

    if (error) {
      return redirect("/signup?message=Could not authenticate user");
    }

    return redirect("/signup?message=Check email to continue sign in process");
  };

  const googleSignIn = async () => {
    "use server";
    const origin = headers().get("origin");
    const cookieStore = cookies();
    const supabase = createClient(cookieStore);

    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${origin}/auth/callback`,
      },
    });

    // console.log(data, error)

    if (error) {
      return redirect("/login?message=Could not authenticate user");
    }

    return redirect(data.url);
  };

  return (
    <>
      <div className="container relative hidden h-[800px] flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
        <Anime />
        <div className="p-6 m-3">
          <LogInForm
            text="Signup"
            signIn={signUp}
            googleSignIn={googleSignIn}
            message={searchParams?.message}
          />
          <form className="animate-in flex flex-col w-full gap-2 text-foreground my-2">
            <button
              formAction={googleSignIn}
              className="border border-foreground/20 rounded-md px-4 py-2 text-foreground mb-2"
            >
              <div className="flex items-center justify-center gap-2 text-md">
                <FcGoogle className="h-4 w-4 inline-block mr-1" />
                <p>Login with Google</p>
              </div>
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
