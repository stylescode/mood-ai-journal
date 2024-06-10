const createURL = (path: string) => {
  return window.location.origin + path;
}

export const createNewEntry = async () => {
  const res = await fetch(new Request(createURL('/api/journal'), {
    method: 'POST',
  }))

  if (res.ok) {
    const data = await res.json();
    return data.data;
  }
}

export const updateEntry = async (id: string, content: string) => {
  console.log('inside updateEntry');
  const res = await fetch(
    new Request(createURL(`/api/journal/${id}`), {
      method: 'PATCH',
      body: JSON.stringify({ content }),
    })
  );

  if (res.ok) {
    const data = await res.json();
    return data.data;
  }
}

export const getInsight = async (question: string) => {
  const res = await fetch(new Request(createURL('/api/insights'), {
    method: 'POST',
    body: JSON.stringify({ question }),
  }))

  if (res.ok) {
    const data = await res.json();
    return data.insight;
  }
}