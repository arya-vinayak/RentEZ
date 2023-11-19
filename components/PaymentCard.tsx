"use client"
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
} from "@/components/ui/dialog"

import { Payment ,PSchema} from "@/types/Payment";



// const paymentSchema = z.object({
//   id: z.string().min(10, {
//     message: "Payment ID must be at least 10 characters.",
//   }),
//   date: z.string().min(10, {
//     message: "Date must be at least 10 characters.",
//   }),
//   cost: z.string(),
//   status: z.string(),
// });


type PaymentCardProps = {
  payments?: Payment[];
  setTasks?: any;
};

export function PaymentCard({ payments,setTasks }: PaymentCardProps) {
  const defaultValues = {
    id:"",
    tenant:"",
    owner:"",
    date: new Date().toISOString().slice(0, 10),
    cost : 0,
    status : "pending",
    type : "rent",//i have set rent payment as default - arya
  }


  const register = useForm({
    resolver: zodResolver(PSchema),
    defaultValues: defaultValues,
  });

  const onSubmit = (data:any) => {
    console.log(data);
   
    const newPayment = {
      id: data.id,
      tenant: data.tenant,
      owner: data.owner,
      date: data.date,
      cost: data.cost,
      status: data.status,
      type: data.type,
    }
    setTasks((prevTasks: Payment[]) => [...prevTasks, newPayment]);
  
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Complete a Payment here</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Make a payment</DialogTitle>
          <DialogDescription>Clear you rental payments here.</DialogDescription>
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
                      <FormLabel>Payment ID</FormLabel>
                      <FormControl>
                        <Input
                          type="text"
                          placeholder="PAYMENT-XXX"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={register.control}
                  name="cost"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Cost</FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          placeholder="Cost"
                          {...field}
                          min={0}
                          onChange={(e) => {
                            // Convert the input value to a number
                            const numericValue = parseFloat(e.target.value);
                            // Set the numeric value to the form field
                            field.onChange(numericValue);
                          }}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <DialogFooter>
                  <Button type="submit">Pay</Button>
                </DialogFooter>
              </form>
            </Form>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}


