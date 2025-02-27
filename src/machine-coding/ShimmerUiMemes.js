
const ShimmerUiMemes = () => {
  return (
    Array(20).fill(0).map((n,i) => (
    <div key={i} className='w-68 h-74 bg-gray-50 border border-gray-400 p-2 m-4 rounded-xl shadow'></div>
    ))
  )
}

export default ShimmerUiMemes;
