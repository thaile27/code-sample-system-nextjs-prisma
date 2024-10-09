"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { HandleCreateStudent } from "@/actions/actions";
import { cn } from "@/lib/utils";

const formSchema = z.object({
  StudentID: z.string().min(2, {
    message: "StudentID must be at least 2 characters."
  }),
  FirstName: z.string().min(2, {
    message: "FirstName must be at least 2 characters."
  }),
  LastName: z.string().min(2, {
    message: "LastName must be at least 2 characters."
  }),
  Email: z.string().email({
    message: "Email must be a valid email address."
  }),
  ProgramCode: z.string().min(2, {
    message: "ProgramCode must be at least 2 characters."
  })
});

export function CreateStudentForm({ className }: { className?: string }) {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      StudentID: "",
      FirstName: "",
      LastName: "",
      Email: "",
      ProgramCode: ""
    }
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    try {
      // Convert form values to FormData
      const formData = new FormData();
      Object.entries(values).forEach(([key, value]) => {
        formData.append(key, value);
      });

      // Call the HandleCreateStudent function
      await HandleCreateStudent(formData);

      // Optionally, reset form or redirect
      form.reset();
      router.push("/students");
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className={cn("space-y-8", className)}>
        <FormField
          control={form.control}
          name="StudentID"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Student ID</FormLabel>
              <FormControl>
                <Input placeholder="Enter Student ID" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* Repeat FormField for FirstName, LastName, Email, ProgramCode */}
        <FormField
          control={form.control}
          name="FirstName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>First Name</FormLabel>
              <FormControl>
                <Input placeholder="Enter First Name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="LastName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Last Name</FormLabel>
              <FormControl>
                <Input placeholder="Enter Last Name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="Email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="Enter Email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="ProgramCode"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Program Code</FormLabel>
              <FormControl>
                <Input placeholder="Enter Program Code" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Creating..." : "Create Student"}
        </Button>
      </form>
    </Form>
  );
}
