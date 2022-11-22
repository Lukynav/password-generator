import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updatePassword } from '../../redux/slices/password'

export const PasswordDisplay = () => {
  const dispatch = useDispatch()
  const { password, length, parameters } = useSelector(state => state)

  useEffect(() => {
    dispatch(updatePassword({ length, parameters }))
  }, [length, parameters])

  return (
    <>
      <label htmlFor='password' className='text-gray-200 font-bold p-2'>Password generated:</label>

      <section className='rounded-md border-2 p-1 border-gray-400 flex gap-1 mb-8'>
        <input id='password' value={password} type='text' className='bg-transparent px-1 font-bold text-white w-full' disabled />
      </section>
    </>
  )
}
