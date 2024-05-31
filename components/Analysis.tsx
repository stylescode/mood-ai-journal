

const Analysis = () => {
  const analysisData = [
    {name: 'Summary', value: ''},
    {name: 'Subject', value: ''},
    {name: 'Mood', value: ''},
    {name: 'Negative', value: ''},
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
