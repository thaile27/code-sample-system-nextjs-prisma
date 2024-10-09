import prisma from "@/lib/db";
import Link from "next/link";

import { GetProgram } from "@/actions/actions";
import { DeleteButton } from "@/components/programs/DeleteButton";
import { EditButton } from "@/components/programs/EditButton";

export default async function ProgramPage({ params }) {
  const { programCode } = params;
  const programDescription = await GetProgram(programCode);

  return (
    <div className="grid items-center justify-items-center min-h-96">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1>Program Detail Page</h1>
        <p>
          {programCode} - {programDescription.Description}
        </p>
        <EditButton programCode={programCode} />
        <DeleteButton programCode={programCode} className="bg-slate-400">
          Delete
        </DeleteButton>
      </main>
    </div>
  );
}
