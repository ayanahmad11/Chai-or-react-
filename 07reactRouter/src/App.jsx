import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './components/header/header'
import Footer from './components/footer/footer'
import Home from './components/Home/home'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
   <Header/>
   <Footer/>
   <Home/>
   </>
  )
}

export default App
