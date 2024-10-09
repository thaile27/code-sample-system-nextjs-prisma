"use client";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table";
import { Student } from "@/lib/domain/Student";
import Link from "next/link";

export function StudentTable({ list }: { list: Student[] }) {
  function handleOnclick() {
    console.log("Clicked");
  }

  return (
    <Table>
      <TableCaption>A list of all enrolled students</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">StudentID</TableHead>
          <TableHead className="w-[100px]">FirstName</TableHead>
          <TableHead className="w-[100px]">LastName</TableHead>
          <TableHead className="w-[100px]">Email</TableHead>
          <TableHead className="w-[100px]">ProgramCode</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {list.map((item) => (
          <TableRow key={item.StudentID.toString()}>
            <TableCell>
              <Link
                href={`/students/edit/${item.StudentID}`}
                style={{ textDecoration: "none", color: "blueviolet" }}
                className="hover:text-blue-600 hover:cursor-pointer">
                {item.StudentID.toString()}
              </Link>
            </TableCell>
            <TableCell>{item.FirstName.toString()}</TableCell>
            <TableCell>{item.LastName.toString()}</TableCell>
            <TableCell>{item.Email ? item.Email.toString() : "N/A"}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
