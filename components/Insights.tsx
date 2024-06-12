'use client';

import { useState } from 'react';
import { getInsight } from '@/utils/api';

const Insights = () => {

  const [question, setQuestion] = useState('');
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setQuestion(e.target.value);
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const insight = await getInsight(question);
    setQuestion('');
    setResponse(insight);
    setLoading(false);
  }

  return (
    <div>
      <form
        onSubmit={handleSubmit}
      >
        <input
          disabled={loading}
          onChange={handleChange}
          value={question}
          type="text"
          className="w-full p-4 text-xl"
          placeholder="Ask me anything"
        />
        <button
          disabled={loading}
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4
          rounded-md text-3xl"
        >
          Ask
        </button>
      </form>
      {loading && <p>Loading...</p>}
      {response && <p>{response}</p>}
    </div>
  )
}

export default Insights;
