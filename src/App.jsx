import { useState } from 'react'
import Index from './sections/atendimento'
import Header from './sections/header/Index'
import Servicos from './sections/servicos'
import Search from './sections/search'
import First from './sections/first'
import Contacts from './sections/contacts'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Index />
      <Servicos/>
      <Search />
      <First />
      <Contacts />
    </>
  )
}

export default App
