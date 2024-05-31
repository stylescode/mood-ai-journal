'use client'

import { createNewEntry } from "@/utils/api";
import { useRouter } from "next/navigation";

const NewEntry = () => {
  const router = useRouter();

  const handleNewEntry = async () => {
    const data = await createNewEntry();
    router.push(`/journal/${data.id}`)
  }

  return (
    <div className="bg-white cursor-pointer overflow-hidden rounded-md border shadow p-4 text-3xl" onClick={handleNewEntry}>
      + New Entry
    </div>
  )
}

export default NewEntry;