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
import ContractCards from "@/components/ContractCard";
import { Contract } from "@/types/Contract";





export default function Contracts() {
  // useEffect(() => {
  //   // Fetch PDF URL from Supabase
  //   const fetchPdfUrl = async () => {
  //     try {
  //       const { data, error } = await supabase
  //         .from("your_pdf_table")
  //         .select("pdf_url")
  //         .single();

  //       if (error) {
  //         throw error;
  //       }

  //       setPdfUrl(data.pdf_url);
  //     } catch (error) {
  //       console.error("Error fetching PDF URL:", error.message);
  //     }
  //   };

  const tempData:Contract[] = [{
    id: "TENANT-A302",
    pdfUrl:"/RESUME.pdf",
  },
  {
    id: "TENANT-A303",
    pdfUrl:"/RESUME.pdf",
  },
  
]

  

  return (
    <ContractCards contracts={tempData} />
  );
}
