import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Projeto from './assets/components/Projeto/projeto'
import Navbar from './assets/components/Navebar/nevbar'
import Intro from './assets/components/Intro/intro'


function App() {


  return (
    <>
    <Navbar/>
    <main>
    <Intro/>
    <Projeto/>
    </main>
    
    </>
    
  )
}

export default App
