import prisma from "@/lib/db";
import { StudentEditForm } from "@/components/students/StudentEditForm";

export default async function StudentEditPage({ params }) {
  const currentStudent = await prisma.student.findUnique({
    where: {
      StudentID: params.studentID
    }
  });

  return (
    <div className="grid items-center justify-items-center min-h-96">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1>Student Edit Page</h1>
        <StudentEditForm student={currentStudent} />
      </main>
    </div>
  );
}
