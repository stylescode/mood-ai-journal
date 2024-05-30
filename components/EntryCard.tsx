const EntryCard = ({ entry }) => {
  const date = new Date(entry.createdAt).toDateString();

  return (
    <div className="divide-y divide-gray-400 bg-white rounded-md overflow-hidden cursor-pointer border shadow p-4">
      <div className="py-3">
        {date}
      </div>
      <div className="py-3">
        {entry.content}
      </div>
      <div className="py-3">
        {entry.id}
      </div>
    </div>
  )
}

export default EntryCard;