/* eslint-disable @typescript-eslint/no-unused-vars */
import prisma from "@/lib/db";
import Link from "next/link";

import { StudentTable } from "@/components/students/StudentTable";

export default async function Home() {
  const students = await prisma.student.findMany();
  return (
    <div className="grid items-center justify-items-center min-h-96">
      <h1>Students Page</h1>
      <div className="grid items-center justify-items-center min-h-96">
        <StudentTable list={students} />
        <Link
          href={"./students/create"}
          className="bg-purple-800 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">
          Add a new Student
        </Link>
      </div>
    </div>
  );
}
