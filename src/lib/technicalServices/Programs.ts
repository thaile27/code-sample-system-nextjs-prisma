import prisma from "@/lib/db";

export class Programs {
  async AddProgram(programCode: string, description: string): Promise<boolean> {
    const result =
      await prisma.$executeRaw`EXEC AddProgram @ProgramCode = ${programCode}, @Description = ${description}`;

    console.log(
      "the affected number of rows after running AddProgram stored procedure ",
      result
    );

    return true;
  }

  async DeleteProgram(programCode: string): Promise<boolean> {
    const result = await prisma.program.delete({
      where: {
        ProgramCode: programCode
      }
    });
    console.log(
      "the affected number of rows after running deleting a program ",
      result
    );

    console.log(result);

    return true;
  }

  
}
