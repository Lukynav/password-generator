export const Title = ({ title, subtitle }) => {
  return (
    <header className='grid gap-4 mb-8'>
      <h1 className='text-center font-sm tablet:font-base text-transparent text-3xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>
        {title}
      </h1>
      <h2 className='font-sm tablet:font-base text-white text-center'>
        {subtitle}
      </h2>
    </header>
  )
}
