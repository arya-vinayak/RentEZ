"use client";

import { DotsHorizontalIcon } from "@radix-ui/react-icons";
import { Row } from "@tanstack/react-table";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { CSchema } from "@/types/Contract";

export interface DataTableRowActionsProps<TData> {
  row: Row<TData>;
  onDeleteRow: (rowId: string) => void;
}

export function DataTableRowActions<TData>({
  row,
  onDeleteRow,
}: DataTableRowActionsProps<TData>) {
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

const handleDelete = () => {
  // Call onDeleteRow with the row ID when Delete is clicked
  onDeleteRow(row.getValue("tenant_id"));
 
};

  const contract = CSchema.parse(row.original);

  return (
    <div  className="flex">
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
                <Button onClick={toggleFullScreen}>Enter Full Screen</Button>
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
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            className="flex h-8 w-8 p-0 data-[state=open]:bg-muted"
          >
            <DotsHorizontalIcon className="h-4 w-4" />
            <span className="sr-only">Open menu</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-[160px]">
          <DropdownMenuItem>Edit</DropdownMenuItem>
          <DropdownMenuItem>Make a copy</DropdownMenuItem>
          <DropdownMenuItem>Favorite</DropdownMenuItem>
          <DropdownMenuItem onClick = {handleDelete}>
            Delete
            <DropdownMenuShortcut>⌘⌫</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

