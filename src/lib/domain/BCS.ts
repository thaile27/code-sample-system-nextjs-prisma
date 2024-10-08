import { Programs } from "../technicalServices/Programs";
import { Students } from "../technicalServices/Students";
import { Student } from "./Student";

export class BCS {
  async CreateProgram(
    programCode: string,
    description: string
  ): Promise<boolean> {
    const ProgramManager: Programs = new Programs();
    return await ProgramManager.AddProgram(programCode, description);
  }

  async RemoveProgram(programCode: string): Promise<boolean> {
    const ProgramManager: Programs = new Programs();
    return await ProgramManager.DeleteProgram(programCode);
  }

  async EnrollStudent(
    acceptedStudent: Student,
    programCode: string
  ): Promise<boolean> {
    const StudentManager: Students = new Students();
    const Confirmation = StudentManager.AddStudent(
      acceptedStudent,
      programCode
    );

    return Confirmation;
  }
}
