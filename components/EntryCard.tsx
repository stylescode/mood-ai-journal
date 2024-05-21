const EntryCard = ({ entry }) => {
  const date = new Date(entry.createdAt).toDateString();

  return (
    <div className="bg-white rounded-md overflow-hidden">
      <div>
        {date}
      </div>
      <div>
        content here
      </div>
      {entry.id}
    </div>
  )
}

export default EntryCard;