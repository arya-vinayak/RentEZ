"use client"

import React, { useState, useEffect } from "react";
import ContractCards from "@/components/ContractCard";
import { Contract } from "@/types/Contract";
import { getData } from "./dataRetrieval";






async function getTasks() {
  const data = await getData();
  return data;
}


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

  const [contracts, setContracts] = useState<Contract[]>([]);

  useEffect(() => {
    getTasks().then((contracts) => setContracts(contracts));
  }, []);

  

  return <ContractCards contracts={contracts} />;
}
