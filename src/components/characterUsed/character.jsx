import { BiHash, BiAt, BiArrowFromBottom, BiArrowFromTop } from 'react-icons/bi'

export const Character = ({ option }) => {
  return (
    <>
      <div className='p-1 bg-gray-700 rounded-md mr-4'>
        {(option === 'uppercase') && <BiArrowFromBottom color='white' size={22} />}
        {(option === 'lowercase') && <BiArrowFromTop color='white' size={22} />}
        {(option === 'number') && <BiHash color='white' size={22} />}
        {(option === 'symbol') && <BiAt color='white' size={22} />}
      </div>
      {(option === 'number') && <label className='text-white p-1'>Allow {option}s</label>}
      {(option === 'symbol') && <label className='text-white p-1'>Allow {option}s</label>}
      {(option !== 'number' && option !== 'symbol') && <label className='text-white p-1'>Allow {option}</label>}
    </>
  )
}
