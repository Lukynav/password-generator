import { useDispatch, useSelector } from 'react-redux'
import { toggleParameters } from '../../redux/slices/parameters'

export const CharacterUsed = ({ option }) => {
  const { parameters } = useSelector(state => state)
  const dispatch = useDispatch()

  const handleChecked = () => {
    dispatch(toggleParameters(option))
  }

  return (
    <article className='flex justify-between'>
      <label className='text-white'>Allow {option}</label>
      <input
        defaultChecked={parameters[option]}
        type='checkbox'
        onChange={handleChecked}
      />
    </article>
  )
}
