import { useState } from 'react'
import Index from './sections/atendimento'
import Header from './sections/header/Index'
import Servicos from './sections/servicos'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Index />
      <Servicos/>
    </>
  )
}

export default App
