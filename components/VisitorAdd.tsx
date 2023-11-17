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
import { VSchema } from "@/types/Visitor";
import { Visitor } from "@/types/Visitor";



type VisitorCardProps = {
  setVisitors?: any;
};

export function VisitorAdd({ setVisitors }: VisitorCardProps) {
 const defaultValues = {
    date_of_visit: "",
    time_of_visit: "",
    visitor_name: "",
    flat_number: "",
 }


  const register = useForm({
    resolver: zodResolver(VSchema),
    defaultValues: defaultValues,
  });

  const onSubmit = (data: any) => {
    console.log(data);

    const newV = {
        date_of_visit: data.date_of_visit,
        time_of_visit: data.time_of_visit,
        visitor_name: data.visitor_name,
        flat_number: data.flat_number,
        };

    setVisitors((prevTasks: Visitor[]) => [...prevTasks, newV]);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Add a Visitor here</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Visitor</DialogTitle>
          <DialogDescription>
            Please add the visitor here.
          </DialogDescription>
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
                  name="date_of_visit"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Date</FormLabel>
                      <FormControl>
                        <Input type="date" placeholder="Date" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={register.control}
                  name="time_of_visit"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Time</FormLabel>
                      <FormControl>
                        <Input type="text" placeholder="12:30" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={register.control}
                  name="visitor_name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input
                          type="text"
                          placeholder="Rohan Mehra"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={register.control}
                  name="flat_number"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Flat Number</FormLabel>
                      <FormControl>
                        <Input
                          type="text"
                          placeholder="A-302"
                          {...field}
                          
                        />
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
