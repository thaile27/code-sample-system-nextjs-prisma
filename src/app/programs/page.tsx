/* eslint-disable @typescript-eslint/no-unused-vars */
import prisma from "@/lib/db";
import Link from "next/link";

export default async function Home() {
  const programs = await prisma.program.findMany();
  return (
    <div className="grid items-center justify-items-center min-h-96">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1>Programs Page</h1>
        <ul>
          {programs.map((program) => (
            <li key={program.ProgramCode}>
              <Link href={`./programs/${program.ProgramCode}`}>
                {program.Description}
              </Link>
            </li>
          ))}
        </ul>
        <Link
          href={"./programs/create"}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Add a new Progam
        </Link>
      </main>
    </div>
  );
}
