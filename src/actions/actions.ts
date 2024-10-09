"use server";

import prisma from "@/lib/db";
import { redirect } from "next/navigation";

import { BCS } from "@/lib/domain/BCS";
import { Student } from "@/lib/domain/Student";
import { error } from "console";

export async function HandleCreateProgram(formData: FormData) {
  const programCode = formData.get("ProgramCode") as string;
  const description = formData.get("Description") as string;

  if (programCode.length > 0 && description.length > 0) {
    const RequestDirector: BCS = new BCS();
    const Confirmation: Promise<boolean> = RequestDirector.CreateProgram(
      programCode,
      description
    );

    console.log(Confirmation);

    redirect("/programs");
  } else {
    throw error("Error with creating a new program");
  }
}

export async function HandleUpdateProgram(formData: FormData) {
  const programCode = formData.get("programCode") as string;
  const description = formData.get("description") as string;

  await prisma.program.update({
    where: {
      ProgramCode: programCode
    },
    data: {
      Description: description
    }
  });

  redirect("/programs");
}

export async function GetProgram(programCode: string) {
  const result =
    await prisma.$queryRaw`EXEC GetProgram @ProgramCode = ${programCode}`;
  return result[0];
}

export async function DeleteProgram(programCode: string) {
  const RequestDirector: BCS = new BCS();

  RequestDirector.RemoveProgram(programCode);
  redirect("/programs");
}

export async function HandleCreateStudent(formData: FormData) {
  const studentData = {
    StudentID: formData.get("StudentID") as string,
    FirstName: formData.get("FirstName") as string,
    LastName: formData.get("LastName") as string,
    Email: formData.get("Email") as string
  };

  const AcceptedStudent: Student = new Student(
    studentData.StudentID,
    studentData.FirstName,
    studentData.LastName,
    studentData.Email
  );

  const ProgramCode = formData.get("ProgramCode") as string;

  const RequestDirector: BCS = new BCS();
  await RequestDirector.EnrollStudent(AcceptedStudent, ProgramCode);

  redirect("/students");
}
