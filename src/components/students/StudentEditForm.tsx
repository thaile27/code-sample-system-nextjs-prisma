"use client";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form";

import { InputWithLabel } from "../InputWithLabel";
import { Button } from "@/components/ui/button";
import { Student } from "@/lib/domain/Student";
import { useForm } from "react-hook-form";

export function StudentEditForm({ student }: { student: Student }) {
  function handleSubmit(data) {
    console.log(data);
  }

  return (
    <Form onSubmit={handleSubmit}>
      <InputWithLabel
        label="StudentID"
        name="StudentID"
        type="text"
        placeholder={student.StudentID.toString()}
      />

      <InputWithLabel
        label="FirstName"
        name="FirstName"
        type="text"
        placeholder={student.FirstName.toString()}
      />

      <InputWithLabel
        label="LastName"
        name="LastName"
        type="text"
        placeholder={student.LastName.toString()}
      />

      <InputWithLabel
        label="Email"
        name="Email"
        type="email"
        placeholder={student.Email ? student.Email.toString() : "N/A"}
      />

      <Button type="submit">Update</Button>
    </Form>
  );
}
