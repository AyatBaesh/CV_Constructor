import React from 'react'
import Navbar from './components/Navbar'
import Content from './components/Content'
import './styles/App.css'
function App() {
  return(
      <div className='mainPanel'>  
        <Navbar />
        <Content />
      </div>
  )
}

export default App
