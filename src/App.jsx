import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState('')

  return (
    <h1 className='p-10 bg-sky-200 text-center text-3xl font-bold underline'>
      start working new project
    </h1>
  )
}

export default App
