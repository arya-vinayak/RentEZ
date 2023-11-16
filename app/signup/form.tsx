"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
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

const tenantSignupSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  username: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  contactNo: z.string().min(10, {
    message: "Contact number must be at least 10 characters.",
  }),
  dob: z.string(),
  flatNo: z.string()
});

export function TenantSignupForm() {
  // Define your form with zodResolver and tenantFormSchema
  const form = useForm({
    resolver: zodResolver(tenantSignupSchema),
    defaultValues: {
      name: "",
     username: "",
      contactNo: "",
      dob: "",
      flatNo: "",
    },
  });

  // Define your form submit handler
  const onSubmit = (data: any) => {
    // Handle form submission here, e.g., send the data to the server
    data.dob = new Date(data.dob).toLocaleDateString('en-GB');
    console.log(data);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="John Doe" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="johndoe@example.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="contactNo"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Contact Number</FormLabel>
              <FormControl>
                <Input placeholder="9845678970" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="dob"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Date of Birth</FormLabel>
              <FormControl>
                <Input type="date" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="flatNo"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Flat Number</FormLabel>
              <FormControl>
                <Input type="text" {...field} />
              </FormControl>
              <FormDescription>
                Please follow the right format
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" onClick  = {onSubmit} >Signup</Button>
      </form>
    </Form>
  );
}
