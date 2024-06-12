import { prisma } from '@/utils/db'
import { currentUser } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'

const createNewUser = async () => {
  const user = await currentUser();

  if (!user) {
    return redirect('/sign-up')
  }

  const match = await prisma.user.findUnique({
    where: {
      clerkId: user.id as string
    }
  })

  if (!match && user) {
    await prisma.user.create({
      data: {
        clerkId: user.id as string,
        email: user?.emailAddresses[0].emailAddress
      }
    })
  }

  redirect('/journal')
}

const NewUser = async () => {
  await createNewUser()
  return (
    <div>
      Congrats, sign up complete!
    </div>
  )
}

export default NewUser