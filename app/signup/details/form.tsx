"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { createClient } from "@/utils/supabase/client";
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
import { AlertCircle } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

const tenantSignupSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  username: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  contactno: z.string().min(10, {
    message: "Contact number must be at least 10 characters.",
  }),
  dob: z.string(),
  role: z.enum(["tenant", "owner","admin"]),
  flatNo: z.string()
});

export function TenantSignupForm() {
  // Define your form with zodResolver and tenantFormSchema
  const router = useRouter();
  const supabase = createClient();
  const [err, setErr] = useState("");
  const form = useForm({
    resolver: zodResolver(tenantSignupSchema),
    defaultValues: {
      name: "",
     username: "",
      contactno: "",
      dob: "",
      role: "tenant",
      flatNo: "",
    },
  });

  const onSubmit = async ({ name, username, contactno, dob, role, flatNo }: any) => {
    const supabase = createClient();
    const { data: { session }} = await supabase.auth.getSession();
    const user = session?.user;
    const id = user?.id as string;
    
    const { error } = await supabase.from("users").insert({id: id, name: name, username: username, contactno: contactno, dob: dob, role: role, flatNo: flatNo});
    if (error) {
      setErr((prevErr: string) => error.message);
    }
    else {
      router.push(`/${role}`);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
      {err && (
          <div className="mb-2">
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>{err}</AlertDescription>
            </Alert>
          </div>
        )}
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
          name="contactno"
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
          name="role"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Role</FormLabel>
              <FormControl>
                <Input type="text" {...field} />
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
        <Button type="submit">Signup</Button>
      </form>
    </Form>
  );
}
