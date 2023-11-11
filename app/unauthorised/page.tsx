"use client";
import { AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import Link from "next/link";
import ghostError from "@/public/animations/ghost.json";
import Lottie from "lottie-react";

function unauthorised() {
  return (
      <div className="flex gap-4 items-center justify-center mx-auto">
        <div className="flex h-screen items-center">
        <Alert variant="destructive" className="mx-auto">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>
            You are not authorised to view this page. <br />
            Please login to continue.
          </AlertDescription>
          <div className="flex justify-center p-2 my-2">
            <Button asChild variant="outline" className="w-full">
              <Link href="/login">Login</Link>
            </Button>
          </div>
        </Alert>
      </div>
      <div className="">
      <Lottie
                animationData={ghostError}
                style={{ height: 250, width: 250 }}
                loop={true}
              />
      </div>
      </div>
  );
}

export default unauthorised;
