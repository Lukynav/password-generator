import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updatePassword } from '../../redux/slices/password'
import { BiError } from "react-icons/bi";

export const PasswordDisplay = () => {
  const dispatch = useDispatch()
  const { password, length, parameters } = useSelector(state => state)

  useEffect(() => {
    dispatch(updatePassword({ length, parameters }))
  }, [length, parameters])

  if(!parameters.uppercase && !parameters.lowercase && !parameters.number && !parameters.symbol){
    return(
      <section className='rounded-md border-2 p-1 border-red-400 bg-red-200 flex gap-1 mb-8'>
        <BiError color='black' size={24} />
        <input value='Please, select one option' type='text' className='bg-transparent px-1 text-black w-full' disabled />
      </section>
    )
  }

  return (
    <section className='rounded-md border-2 p-1 border-gray-400 flex gap-1 mb-8'>
      <input value={password} type='text' className='bg-transparent px-1 font-bold text-white w-full' disabled />
    </section>
  )
}