'use client'

import { DeleteProgram } from '@/actions/actions'
import { useState } from 'react'

import { cn } from '@/lib/utils'

export function DeleteButton({children, programCode, className}: {children:React.ReactNode, programCode: string, className?: string}) {
  const [isDeleting, setIsDeleting] = useState<boolean>(false)

  const handleDelete = async () => {
    const response = confirm("Are you sure you want to delete this program?")
    if (response) {
      setIsDeleting(true)
      try {
        await DeleteProgram(programCode)
        // Optionally, you could add some success feedback here
      } catch (error) {
        console.error("Error deleting program:", error)
        alert("Failed to delete program. Please try again.")
      } finally {
        setIsDeleting(false)
      }
    }
  }

  return (
    <button
      className={cn("bg-red-400 hover:bg-red-700 text-white font-bold py-2 px-4 rounded", className)}
      onClick={handleDelete}
      disabled={isDeleting}
      aria-label={`Delete program ${programCode}`}
    >
      {isDeleting ? 'Deleting...' : children}
    </button>
  )
}