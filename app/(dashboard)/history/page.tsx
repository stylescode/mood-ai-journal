import { prisma } from '@/utils/db';
import { getUserByClerkId } from '@/utils/auth';
import HistoryChart from '@/components/HistoryChart';

const getData = async () => {
  const user = await getUserByClerkId();
  const analyses = await prisma.analysis.findMany({
    where: {
      userId: user.id
    },
    orderBy: {
      createdAt: 'asc'
    }
  })

  const sum = analyses.reduce((acc, curr) => acc + curr.sentiment, 0);
  const avg = sum / analyses.length;

  return { analyses, avg };
}


const HistoryPage = async () => {
  const { analyses, avg } = await getData();

  return (
    <div>
      <h1>History</h1>
      <div>Average Sentiment: {avg}</div>
      <div className="w-[500px] h-[500px]">
        <HistoryChart analyses={analyses} />
      </div>
    </div>
  );
}

export default HistoryPage;