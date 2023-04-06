import React from 'react'
import About from '../components/About'
import Blogsection from '../components/Blogsection'
import Feature from '../components/Feature'
import Hero from '../components/Hero'
import Newsletter from '../components/Newsletter'

function Home() {
  return (
    <div>
      <Hero />
      <Newsletter />
      <Blogsection />
      <Feature />
      <About />
    </div>
  )
}

export default Home