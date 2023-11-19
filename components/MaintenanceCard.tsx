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
  owner?: boolean;
};

export function MaintenanceCard({ setTasks,owner }: PaymentCardProps) {
  const defaultValues = {
    payment_id: "",
    flat_number: NaN,
    date: new Date().toISOString().slice(0, 10),
    description: "",
    cost: 0,
    maintenance_status: "todo",
    payment_status: "pending",
  };

  const register = useForm({
    resolver: zodResolver(MSchema),
    defaultValues: defaultValues,
  });

  const onSubmit = (data: any) => {
    console.log(data);

    const newM = {
      payment_id: data.payment_id,
      date: data.date,
      flat_number: data.flat_number,
      description: data.description,
      cost: data.cost,
      maintenance_status: data.maintenance_status,
      payment_status: data.payment_status
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
                {owner && (
                  <FormField
                    control={register.control}
                    name="flat_number"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Flat Number</FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            placeholder="Flat Number"
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
                )}

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
