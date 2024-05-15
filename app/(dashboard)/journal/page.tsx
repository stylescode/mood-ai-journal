import { getUserByClerkId } from '@/utils/auth'
import { prisma } from '@/utils/db'
import NewEntry from '@/components/NewEntry';
import EntryCard from '@/components/EntryCard';

const getEntries = async () => {
  const user = await getUserByClerkId();
  const entries = await prisma.journalEntry.findMany({
    where: {
      userId: user.id
    },
    orderBy: {
      createdAt: 'desc'
    }
  })

  return entries;
}


const JournalPage = async () => {
  const entries = await getEntries();
  console.log('entries:', entries)

  return (
    <div className="grid grid-cols-3 gap-4">
      <NewEntry />
      {entries.map(entry => (
        <EntryCard entry={entry} key={entry.id}/>
      ))}
    </div>
  )
}

export default JournalPage