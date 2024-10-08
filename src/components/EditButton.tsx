"use client";

import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

export function EditButton({
  programCode,
  className
}: {
  programCode: string;
  className?: string;
}) {
  const router = useRouter();
  return (
    <button
      className={cn(
        "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded",
        className
      )}
      onClick={() => router.push(`/programs/edit/${programCode}`)}>
      Edit
    </button>
  );
}
