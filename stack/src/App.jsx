import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {Routes,Route}from 'react-router-dom'
import home from '/src/pages/home.jsx'
import register from '/src/pages/register.jsx' 
import './App.css'
import arr from './assets/white-arrow.png'
import Home from './pages/home'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Routes>
       <Route path='/' exact element= {<Home/>}></Route>
       <Route path='/Register' exact element= {<Register/>}></Route>
    </Routes>
    </>
  )
}

export default App
