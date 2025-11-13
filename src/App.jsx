import { useState } from 'react'
import Index from './sections/atendimento'
import Header from './sections/header/Index'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Index />
    </>
  )
}

export default App
