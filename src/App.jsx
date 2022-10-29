import { CharacterUsed } from './components/characterUsed/CharacterUsed'
import { PasswordDisplay } from './components/passwordDisplay/PasswordDisplay'
import { PasswordLength } from './components/passwordLength/PasswordLength'
import { Title } from './components/title/Title'

export default function App () {
  return (
    <main className='w-screen h-screen bg-black'>
      <div className='m-auto py-8 w-96'>
        <Title
          title='Password generator'
          subtitle='Create strong and secure passowords to keep your account safe online'
        />
        <PasswordDisplay />
        <PasswordLength />

        <section className='grid gap-2 bg-gray-800 p-4 rounded-md mb-8'>
          <h3 className='row-span-2 text-white text-lg font-bold mb-1'>Characters used:</h3>
          <CharacterUsed option='uppercase' />
          <CharacterUsed option='lowercase' />
          <CharacterUsed option='number' />
          <CharacterUsed option='symbol' />
        </section>
      </div>
    </main>
  )
}
