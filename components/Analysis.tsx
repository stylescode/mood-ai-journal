'use client';

interface AnalysisProps {
  data: {
    mood: string;
    summary: string;
    color: string;
    music: string;
  }
}

const Analysis = ({ data }: AnalysisProps) => {

  const analysisData = [
    {name: 'Mood', value: data.mood},
    {name: 'Summary', value: data.summary},
    {name: 'Color', value: data.color},
    {name: 'Soundtrack', value: data.music},
  ]

  return (
    <div>
      <ul>
        {analysisData.map((category, index) => (
          <li key={index} className="flex items-center justify-between px-2 py-4 border-b border-t border-black/30">
            <h3 className="text-xl font-semibold">{category.name}</h3>
            <p>{category.value}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Analysis;
