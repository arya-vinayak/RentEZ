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


const paymentSchema = z.object({
  id: z.string().min(10, {
    message: "Payment ID must be at least 10 characters.",
  }),
  date: z.string().min(10, {
    message: "Date must be at least 10 characters.",
  }),
  cost: z.string(),
  status: z.string(),
});

type Payment = {
  id: string;
  date: string;
  cost: string;
  status: string;
};

type PaymentCardProps = {
  payments?: Payment[];
  setTasks?: any;
};

export function PaymentCard({ payments,setTasks }: PaymentCardProps) {
  const defaultValues = {
    id: "",
    date: "",
    cost: "NULL",
    status: "pending",
  };


  const register = useForm({
    resolver: zodResolver(paymentSchema),
    defaultValues: defaultValues,
  });

  const onSubmit = (data:any) => {
    console.log(data);
   
    const newPayment: Payment = {
      id: data.id,
      date: data.date,
      cost: data.cost,
      status: data.status,
    };
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
          <DialogDescription>
            Clear you rental payments here.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-1 items-center gap-4">
          <Form {...register}>
          <form onSubmit={register.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={register.control}
              name="id"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Payment ID</FormLabel>
                  <FormControl>
                    <Input type="text" placeholder="PAYMENT-XXX" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={register.control}
              name="date"
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
              name="cost"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Cost</FormLabel>
                  <FormControl>
                    <Input type="text" placeholder="Cost" {...field} />
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


