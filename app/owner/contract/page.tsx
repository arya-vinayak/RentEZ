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
  {
    id: "TENANT-A304",
    pdfUrl:"/RESUME.pdf",
  },
  {
    id: "TENANT-A305",
    pdfUrl:"/RESUME.pdf",
  },
  {
    id: "TENANT-A306",
    pdfUrl:"/RESUME.pdf",
  },
  {
    id: "TENANT-A307",
    pdfUrl:"/RESUME.pdf",
  },
  {
    id: "TENANT-A308",
    pdfUrl:"/RESUME.pdf",
  },
  {
    id: "TENANT-A309",
    pdfUrl:"/RESUME.pdf",
  },
  {
    id: "TENANT-A310",
    pdfUrl:"/RESUME.pdf",
  },
  {
    id: "TENANT-A311",
    pdfUrl:"/RESUME.pdf",
  },
  {
    id: "TENANT-A312",
    pdfUrl:"/RESUME.pdf",
  },
  {
    id: "TENANT-A313",
    pdfUrl:"/RESUME.pdf",
  },
  {
    id: "TENANT-A314",
    pdfUrl:"/RESUME.pdf",
  },
  {
    id: "TENANT-A315",
    pdfUrl:"/RESUME.pdf",
  },
  {
    id: "TENANT-A316",
    pdfUrl:"/RESUME.pdf",
  },
  {
    id: "TENANT-A317",
    pdfUrl:"/RESUME.pdf",
  },
  {
    id: "TENANT-A318",
    pdfUrl:"/RESUME.pdf",
  },
  {
    id: "TENANT-A319",
    pdfUrl:"/RESUME.pdf",
  },
  {
    id: "TENANT-A320",
    pdfUrl:"/RESUME.pdf",
  },
  {
    id: "TENANT-A321",
    pdfUrl:"/RESUME.pdf",
  },
  {
    id: "TENANT-A322",
    pdfUrl:"/RESUME.pdf",
  },
  {
    id: "TENANT-A323",
    pdfUrl:"/RESUME.pdf",
  },
  {
    id: "TENANT-A324",
    pdfUrl:"/RESUME.pdf",
  },
  {
    id: "TENANT-A325",
    pdfUrl:"/RESUME.pdf",
  }
]

  

  return (
    <ContractCards contracts={tempData} />
  );
}
