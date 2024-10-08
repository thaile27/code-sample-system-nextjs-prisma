import prisma from "../db";
import { Student } from "../domain/Student";

export class Students {
  async AddStudent(
    acceptedStudent: Student,
    programCode: string
  ): Promise<boolean> {
    const result =
      await prisma.$executeRaw`exec AddStudent @StudentID = ${acceptedStudent.StudentID()}, @FirstName = ${acceptedStudent.FirstName()}, @LastName = ${acceptedStudent.LastName()}, @Email = ${acceptedStudent.Email()}, @ProgramCode = ${programCode}`;

    console.log(result);
    return true;
  }
}
