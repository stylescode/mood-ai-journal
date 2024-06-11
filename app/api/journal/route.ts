import { getUserByClerkId } from "@/utils/auth";
import { prisma } from "@/utils/db"
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";
import { analyze } from '@/utils/ai';

export const POST = async () => {
  const user = await getUserByClerkId();

  const entry = await prisma.journalEntry.create({
    data: {
      userId: user.id,
      content: 'Write whatever you feel like'
    }
  })

  const analysis = await analyze(entry.content);

  await prisma.analysis.create({
    data: {
      entryId: entry.id,
      mood: analysis.mood,
      summary: analysis.summary,
      color: analysis.color,
      soundtrack: analysis.music,
      sentiment: analysis.sentiment
    }
  })

  revalidatePath('/journal');

  return NextResponse.json({ data: entry })
}