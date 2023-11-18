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
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Maintain } from "@/types/Maintenance";
import { MSchema } from "@/types/Maintenance";


type PaymentCardProps = {
  setTasks?: any;
};

export function MaintenanceCard({ setTasks }: PaymentCardProps) {
  const defaultValues = {
    flat_number: "",
    date: new Date().toISOString().slice(0, 10),
    description: "",
    cost: 0,
    maintenance_status: "todo",
    maintenance_payment_status: "pending",
  };

  const register = useForm({
    resolver: zodResolver(MSchema),
    defaultValues: defaultValues,
  });

  const onSubmit = (data: any) => {
    console.log(data);

    const newM = {
      date: data.date,
      description: data.description,
      cost: data.cost,
      maintenance_status: data.maintenance_status,
      maintenance_payment_status: data.maintenance_payment_status,
      flat_number: data.flat_number,
    };
    setTasks((prevTasks: Maintain[]) => [...prevTasks, newM]);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Add a Request here</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Make a Request</DialogTitle>
          <DialogDescription>
            Please add your maintenance request here.
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
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Description</FormLabel>
                      <FormControl>
                        <Input
                          type="text"
                          placeholder="Give a description"
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
                          onChange={(event) =>
                            field.onChange(+event.target.value)
                          }
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <DialogFooter>
                  <Button type="submit">Add Request</Button>
                </DialogFooter>
              </form>
            </Form>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
