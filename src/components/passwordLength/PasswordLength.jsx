import { useDispatch, useSelector } from 'react-redux'
import { changeLenght } from '../../redux/slices/Length'

export const PasswordLength = () => {
  const { length } = useSelector(state => state)
  const dispatch = useDispatch()

  const handleScroll = (e) => {
    const { value } = e.target
    dispatch(changeLenght(Number(value)))
  }

  return (
    <section className='grid gap-1 mb-8 bg-gray-800 p-4 rounded-md'>
      <label for='range' className='row-span-2 text-white text-lg font-bold mb-2'>Password length: {length}</label>
      <input
        id='range'
        type='range'
        min='6'
        max='60'
        step='1'
        defaultValue={length}
        onChange={handleScroll}
        className='bg-gray-400 h-1 rounded-lg appearance-none cursor-pointer'
      />
    </section>
  )
}
