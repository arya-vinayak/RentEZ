"use client"
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { TenantSignupForm } from "./form";
import signupAnime from "@/public/animations/signup.json";
import Lottie from "lottie-react";
import { Button } from "@/components/ui/button";
import Anime from "@/components/Anime";


// export const metadata: Metadata = {
//   title: "Authentication",
//   description: "Authentication forms built using the components.",
// };

// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function AuthenticationPage() {
  return (
    <>
      <div className="container relative flex-col items-center justify-center h-screen md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
      <Anime />
        {/* first grid */}

        <div className="p-6 m-3 flex flex-col items-center justify-center">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <div className="flex flex-col space-y-2 text-center">
              <h1 className="text-2xl font-semibold tracking-tight">
                Create an account
              </h1>
              <p className="text-sm text-muted-foreground">
                Enter the required details to create your account
              </p>
            </div>
            <TenantSignupForm />
          </div>
        </div>
        {/* second grid */}
        <div className="absolute top-4 right-4 md:right-8 md:top-8">
          <Link href="/login">
            <Button>Log In</Button>
          </Link>
        </div>
      </div>
    </>
  );
}
