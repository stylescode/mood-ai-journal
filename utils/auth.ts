import { auth } from "@clerk/nextjs/dist/types/server";
import { prisma } from "./db";

export const getUserByClerkId = async ({ includes = {}, select = {}}) => {
  const { userId } = await auth();

  const user = await prisma.user.findUniqueOrThrow({
    where: {
      clerkId: userId,
    },
    select,
    includes
  })

  return user;
}