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
import { ASchema } from "@/types/Announcements";
import { Announcement } from "@/types/Announcements";

type AnnouncementCardProps = {
  setAnnouncements?: any;
};

export function AnnouncementAdd({ setAnnouncements }: AnnouncementCardProps) {
  const defaultValues = {
    id: "",
    date_of_announcement: new Date().toISOString().slice(0, 10),
    announcement_message: "",
    announced_by: "",
  };

  const register = useForm({
    resolver: zodResolver(ASchema),
    defaultValues: defaultValues,
  });

  const onSubmit = (data: any) => {
    console.log(data);

    const newA = {
      id: data.id,
      date_of_announcement: data.date_of_announcement,
      announcement_message: data.announcement_message,
      announced_by: data.announced_by,
    };

    setAnnouncements((prevA: Announcement[]) => [...prevA, newA]);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Add an announcement</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Annoucement</DialogTitle>
          <DialogDescription>
            Please add the announcement here.
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
                  name="id"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Block Admin ID</FormLabel>
                      <FormControl>
                        <Input type="text" placeholder="4" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={register.control}
                  name="announcement_message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Input
                          type="text"
                          placeholder="Evacuate now!!"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={register.control}
                  name="announced_by"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Announced by</FormLabel>
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
