import './App.css'
import GetStarted from './components/GetStarted'
import Navbar from './components/Navbar'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navbar/>}/>
        <Route path='/getstarted' element={<GetStarted/>}/>
      </Routes>
  
    </BrowserRouter>
  )
}

export default App
