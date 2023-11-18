"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { set, useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { CardTitle, CardContent, Card, CardHeader } from "@/components/ui/card";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { CSchema } from "@/types/Contract";
import { Contract } from "@/types/Contract";




type ContractCardProps = {
  setContracts?: any;
};

export function ContractAdd({ setContracts }:ContractCardProps) {
 const defaultValues = {
    tenant_id: "",
    owner_id: "",
    start_date: "",
    end_date: "",
    pdfUrl: "",
 }


  const register = useForm({
    resolver: zodResolver(CSchema),
    defaultValues: defaultValues,
  });

  const onSubmit = (data: any) => {
    console.log(data);

    const newC = {
      tenant_id: data.tenant_id,
      owner_id: data.owner_id,
      start_date: data.start_date,
      end_date: data.end_date,
      pdfUrl: data.pdfUrl,
        };

    setContracts((prevContracts: Contract[]) => [...prevContracts, newC]);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Add a Contract here</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Contract</DialogTitle>
          <DialogDescription>Please add a Contract here.</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-1 items-center gap-4">
            <Form {...register}>
              <form
                onSubmit={register.handleSubmit(onSubmit)}
                className="space-y-8"
              >
                <FormField
                  control={register.control}
                  name="tenant_id"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Tenant ID</FormLabel>
                      <FormControl>
                        <Input type="text" placeholder="Tenant ID" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={register.control}
                  name="owner_id"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Owner ID</FormLabel>
                      <FormControl>
                        <Input type="text" placeholder="Owner ID" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={register.control}
                  name="start_date"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Start Date</FormLabel>
                      <FormControl>
                        <Input type="date" placeholder="Start Date" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={register.control}
                  name="end_date"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>End Date</FormLabel>
                      <FormControl>
                        <Input type="date" placeholder="End Date" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={register.control}
                  name="pdfUrl"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>PDF URL</FormLabel>
                      <FormControl>
                        <Input type="text" placeholder="PDF URL" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <DialogFooter>
                  <Button type="submit">Add</Button>
                </DialogFooter>
              </form>
            </Form>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
