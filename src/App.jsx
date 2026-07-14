import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AddEntry from './components/AddEntry'
import ViewEntry from './components/ViewEntry'
import Home from './components/Home'

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddEntry />} />
        <Route path="/view" element={<ViewEntry />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App