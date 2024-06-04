'use client'
import { updateEntry } from '@/utils/api';
import { useState } from 'react';
import { useAutosave } from 'react-autosave';
import Analysis from './Analysis';

const Editor = ({ entry }) => {
  const [value, setValue] = useState(entry.content);
  const [isLoading , setIsLoading] = useState(false);
  const [analysis, setAnalysis] = useState(entry.analysis);

  useAutosave({
    data: value,
    onSave: async (newValue) => {
      setIsLoading(true);
      const updatedEntry = await updateEntry(entry.id, newValue);
      setAnalysis(updatedEntry.analysis);
      setIsLoading(false);
    },
  })
  return (
    <div className="w-full h-full">
      {isLoading && <div>Loading...</div>}
      <textarea className="w-full h-full p-8 text-xl" value={value} onChange={(e) => setValue(e.target.value)}/>
      <Analysis data={analysis}/>
    </div>
  )
}

export default Editor;