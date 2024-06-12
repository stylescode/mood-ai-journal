import Editor from '@/components/Editor';
import { getUserByClerkId } from '@/utils/auth';
import { prisma } from '@/utils/db';

const getEntry = async (id) => {
  const user = await getUserByClerkId();
  const entry = await prisma.journalEntry.findUnique({
    where: {
      userId_id: {
        userId: user.id,
        id,
      }
    },
    include: {
      analysis: true
    }
  })

  return entry;
}

const EntryPage = async ({ params }) => {
  const entry = await getEntry(params.id)
  return (
    <div className="w-full h-full grid grid-cols-3">
      <div className="col-span-2">
        <Editor entry={entry}/>
      </div>
      <div className="border-l-[7px] border-green-700">
        <div className="bg-blue-100 px-6 py-10">
          <h2 className="text-2xl">AI Analysis</h2>
        </div>
      </div>
    </div>
  )
}

export default EntryPage;