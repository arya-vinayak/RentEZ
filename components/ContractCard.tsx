"use client";
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Contract } from "@/types/Contract";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Breadcrumb from "./Breadcrumbs/Breadcrumb";
export default function ContractCards({
  contracts,
}: {
  contracts: Contract[];
}) {
  const [isFullScreen, setIsFullScreen] = useState(false);

  const toggleFullScreen = () => {
    const iframe = document.querySelector("iframe");

    if (iframe?.requestFullscreen) {
      if (document.fullscreenElement) {
        document.exitFullscreen();
      } else {
        iframe.requestFullscreen();
      }
    }
  };

  return (
    <>
      <Breadcrumb pageName="Contracts"/>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {contracts.map((contract, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Tenant ID</CardTitle>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="h-4 w-4 text-muted-foreground"
              >
                <rect width="20" height="14" x="2" y="5" rx="2" />
                <path d="M2 10h20" />
              </svg>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{contract.tenant_id}</div>
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline">View PDF</Button>
                </DialogTrigger>
                <DialogContent className="max-w-auto max-h-auto w-auto h-auto">
                  <Card
                    className={`w-full m-5 sm:w-[90%] ${
                      isFullScreen ? "fixed inset-0 overflow-hidden" : ""
                    }`}
                  >
                    <CardHeader>
                      <CardTitle>Contract Details</CardTitle>
                      {!isFullScreen && (
                        <Button onClick={toggleFullScreen}>
                          Enter Full Screen
                        </Button>
                      )}
                    </CardHeader>
                    <CardContent>
                      <div>
                        {contract.pdfUrl && (
                          <iframe
                            title="PDF Viewer"
                            src={contract.pdfUrl}
                            width="100%"
                            height="500px"
                            frameBorder="0"
                          />
                        )}
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between"></CardFooter>
                  </Card>
                </DialogContent>
              </Dialog>
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  );
}
