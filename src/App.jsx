import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import AddEntry from './components/AddEntry'
import ViewEntry from './components/ViewEntry'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <AddEntry />
      <ViewEntry />
    </>
  )
}

export default App
