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
import { HandleCreateProgram } from "@/actions/actions";
import { cn } from "@/lib/utils";

export function ProgramCreateForm({ className }: { className?: string }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  const formSchema = z.object({
    ProgramCode: z.string().min(1, "Program Code is required"),
    Description: z.string().min(1, "Description is required")
  });

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      ProgramCode: "",
      Description: ""
    }
  });

  const handleSubmit = form.handleSubmit((data) => {
    setIsSubmitting(true);
    console.log("Form submitted with data:", data);
    // Here you can access data.ProgramCode and data.Description
    // Perform your submission logic here

    const formData: FormData = new FormData();
    formData.append("ProgramCode", data.ProgramCode);
    formData.append("Description", data.Description);

    HandleCreateProgram(formData);

    setIsSubmitting(false);
    form.reset();
    router.push("/programs");
  });

  return (
    <Form {...form}>
      <form onSubmit={handleSubmit} className={cn("space-y-2", className)}>
        <FormField
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
        <FormDescription>This is your program code</FormDescription>

        <FormField
          name="Description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Input placeholder="Enter Program Description" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormDescription>This is your program description</FormDescription>

        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Creating..." : "Create Program"}
        </Button>
      </form>
    </Form>
  );
}
