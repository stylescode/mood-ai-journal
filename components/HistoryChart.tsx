'use client'

import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const CustomToolTip = ({ payload, label, active }) => {
  const dateLabel = new Date(label).toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
  });

  if (active) {
    const analysis = payload[0].payload;
    return (
      <div className="bg-white p-4 rounded-md shadow-md">
        <h3 className="text-xl font-semibold">{dateLabel}</h3>
        <p>{analysis.sentiment}</p>
      </div>
    )
  }

  return null;

}

const HistoryChart = ({ analyses }) => {

  return (
    <ResponsiveContainer width={'100%'} height={'100%'}>
      <LineChart data={analyses}>
        <Line
          type="monotone"
          dataKey="sentiment"
          stroke="#8884d8"
          strokeWidth={2}
          activeDot={{ r: 8 }} />
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="createdAt" />
        <YAxis />
        <Tooltip content={CustomToolTip} />
        <Legend />
      </LineChart>
    </ResponsiveContainer>
  )
}

export default HistoryChart;