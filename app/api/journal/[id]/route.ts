import { analyze } from "@/utils/ai";
import { getUserByClerkId } from "@/utils/auth"
import { prisma } from "@/utils/db";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export const PATCH = async (request, { params }) => {
  const newContent = await request.json();
  const user = await getUserByClerkId();
  const updatedEntry = await prisma.journalEntry.update({
    where: {
      userId_id: {
        userId: user.id,
        id: params.id
      }
    },
    data: {
      content: newContent.content
    }
  })

  const newAnalysis = await analyze(updatedEntry.content);

  await prisma.analysis.update({
    where: {
      entryId: updatedEntry.id
    },
    data: {
      mood: newAnalysis.mood,
      summary: newAnalysis.summary,
      color: newAnalysis.color,
      soundtrack: newAnalysis.music,
      sentiment: newAnalysis.sentiment
    }
  })

  return NextResponse.json({ data: {...updatedEntry, analysis: newAnalysis}})
}