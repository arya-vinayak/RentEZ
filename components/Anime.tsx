"use client";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import signupAnime from "@/public/animations/signup.json";
import Lottie from "lottie-react";

const Anime = () => {
  return (
    <>
      <Link
        href="/login"
        className={cn(
          buttonVariants({ variant: "ghost" }),
          "absolute right-4 top-4 md:right-8 md:top-8"
        )}
      >
        Login
      </Link>
      <div className="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex">
        <div className="absolute inset-0 bg-zinc-900" />
        <div className="relative z-20 flex items-center text-lg font-medium">
          <Link href={"/"}>
            {/* <SiGooglehome className="text-4xl" /> */}
            <p className="font-bold text-5xl">
              Rent <span className="font-bold text-green-400 text-5xl">EZ</span>
            </p>
          </Link>
        </div>
        <div className="relative z-20 mt-auto">
          <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10 col-span-4 flex items-center justify-center">
            <Lottie
              animationData={signupAnime}
              style={{ height: 600, width: 600 }}
              loop={true}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Anime;
