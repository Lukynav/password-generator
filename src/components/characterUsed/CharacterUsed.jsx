import { useDispatch, useSelector } from 'react-redux'
import { toggleParameters } from '../../redux/slices/parameters'
import { Character } from './character';

export const CharacterUsed = ({ option }) => {
  const { parameters } = useSelector(state => state)
  const dispatch = useDispatch()
  

  const handleChecked = () => {
    dispatch(toggleParameters(option))
  }

  return (
    <>
      {
        (!parameters[option]) && 
        <button className={'flex align-button border-gray-700 p-2 border-2 rounded-md'} onClick={handleChecked}>
          <Character option={option} />
        </button>
      }
      {
        (parameters[option]) && 
        <button className='flex align-button bg-gray-700 border-white p-2 border-2 rounded-md' onClick={handleChecked}>
          <Character option={option} />
        </button>
      }
    </>
  )
}