/* eslint-disable @typescript-eslint/no-unused-vars */
import prisma from "@/lib/db";
import Link from "next/link";

import { AiOutlineDelete } from "react-icons/ai";

export default async function Home() {
  const programs = await prisma.program.findMany();
  return (
    <div className="grid items-center justify-items-center min-h-96">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1>Programs Page</h1>
        <ul>
          {programs.map((program, index) => (
            <li key={program.ProgramCode} className="flex justify-between">
              <Link href={`./programs/${program.ProgramCode}`}>
                {++index}. {program.Description}
              </Link>
              <AiOutlineDelete className="mx-5" />
            </li>
          ))}
        </ul>
        <Link
          href={"./programs/create"}
          className="bg-purple-800 hover:bg-purple-500-700 text-white font-bold py-2 px-4 rounded">
          Add a new Progam
        </Link>
      </main>
    </div>
  );
}
