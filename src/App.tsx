import './App.css'

import { Route, Routes } from 'react-router-dom'
import Hooks1 from './components/Hooks1'
import Welcome from './components/Welcome'

function App() {

  return (
    <>
      
      <Routes>
        <Route path='/' element={<Welcome/>}/>
        <Route path='/hooks' element={<Hooks1 />} />
      </Routes>
    </>
  )
}

export default App
