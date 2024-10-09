/* eslint-disable @typescript-eslint/no-unused-vars */
import prisma from "@/lib/db";
import Link from "next/link";

import { CreateStudentForm } from "@/components/students/StudentCreateForm";

export default async function CreateStudentPage() {
  return (
    <div className="justify-items-center min-h-96">
      <h1 className="text-center text-xl font-semibold min-w-full my-5">
        Create New Student Page
      </h1>
      <CreateStudentForm className=" flex flex-col items-center justify-center h-screen" />
    </div>
  );
}
