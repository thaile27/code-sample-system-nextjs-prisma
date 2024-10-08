/* eslint-disable @typescript-eslint/no-unused-vars */
import { UpdateProgram } from "@/actions/actions";
import prisma from "@/lib/db";
import Link from "next/link";

export default async function EditProgramPage({ params }) {
  const program = await prisma.program.findUnique({
    where: {
      ProgramCode: params.programCode
    }
  });

  return (
    <div className="grid items-center justify-items-center min-h-96">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="font-semibold">Edit Program Page</h1>
        <form action={UpdateProgram} className="flex flex-col gap-4">
          <label htmlFor="programCode">Program Code:</label>
          <input
            className="border border-black px-2"
            type="text"
            name="programCode"
            value={program?.ProgramCode}
          />
          <label>Description:</label>
          <input
            className="border border-black px-2"
            type="text"
            name="description"
            placeholder={program?.Description}
          />
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Update
          </button>
        </form>
      </main>
    </div>
  );
}
