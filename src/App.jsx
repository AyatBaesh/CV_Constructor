import React from 'react'
import { useState } from 'react'
import Navbar from './components/Navbar'
import Content from './components/Content'
import './styles/App.css'
function App() {
  return(
    <> 
      
        <Navbar />
      <div className='mainPanel'>  
        <Content />
      </div>
    </>
  )
}

export default App
