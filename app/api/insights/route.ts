import { getUserByClerkId } from "@/utils/auth";
import { prisma } from "@/utils/db";
import { giveInsight } from "@/utils/ai";
import { NextResponse } from "next/server";

export const POST = async (req, res) => {
  const { question } = await req.json();
  const user = await getUserByClerkId();

  const entries = await prisma.journalEntry.findMany({
    where: {
      userId: user.id
    },
    select: {
      id: true,
      content: true,
      createdAt: true,
      updatedAt: true
    }
  });

  const insight = await giveInsight(question, entries);

  return NextResponse.json({ insight });
}