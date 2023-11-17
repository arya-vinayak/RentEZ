"use client";
import React from "react";

import { Visitor } from "@/types/Visitor";

function VisitorCard({ visitors }: { visitors: Visitor[] }) {
  return (
    <>
      {visitors.map((visitor, index) => (
        <div
          key={index}
          className=" m-3 p-2 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-black dark:border-gray-700 dark:hover-bg-gray-700"
        >
          <p className="mb-2 text-1xl font-bold tracking-tight text-gray-900 dark:text-white">
            {visitor.visitor_name}
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-300 text-right mt-2">
            {visitor.date_of_visit}
          </p>
        </div>
      ))}
    </>
  );
}

export default VisitorCard;
