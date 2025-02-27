const MemesItemCard = ({ data }) => {
    const { url, author } = data;
  return (
    <div className="bg-gray-50 border border-gray-400 p-2 m-4 rounded-xl shadow">
    <img src={url} alt="Meme-card-image" className="w-64 h-64" />
    <h2 className="flex">{author}</h2>
    </div>    
  )
}

export default MemesItemCard;
