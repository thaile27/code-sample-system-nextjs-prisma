import { ProgramCreateForm } from "@/components/programs/ProgramCreateForm";
import { HandleCreateProgram } from "@/actions/actions";

export default async function CreateProgramPage() {
  return (
    <div className="grid items-center justify-items-center min-h-96">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className=" font-semibold">Create New Program Page</h1>

        {/* <form action={HandleCreateProgram} className="flex flex-col gap-4">
          <label htmlFor="programCode">Program Code:</label>
          <input
            className="border border-black"
            type="text"
            name="programCode"
          />
          <label>Description:</label>
          <input
            className="border border-black"
            type="text"
            name="description"
          />
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Create Program
          </button>
        </form> */}

        <ProgramCreateForm />
      </main>
    </div>
  );
}
