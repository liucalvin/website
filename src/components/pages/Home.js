import '../../App.css'

import React from 'react'
import Header from '../Header'
import Projects from '../Projects'
import Experience from '../Experience'
import Background from '../Background'

function Home() {
  return (
    <>
      <div className='home-container'>
        <Background />
        <Header />
        <Experience />
        <Projects />
      </div>
    </>
  )
}

export default Home
