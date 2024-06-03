interface AnalysisProps {
  entry: {
    analysis: {
      mood: string;
      summary: string;
      color: string;
      soundtrack: string;
    }
  }
}

const Analysis = ({ entry }: AnalysisProps) => {
  const analysisData = [
    {name: 'Mood', value: entry.analysis.mood},
    {name: 'Summary', value: entry.analysis.summary},
    {name: 'Color', value: entry.analysis.color},
    {name: 'Soundtrack', value: entry.analysis.soundtrack},
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
