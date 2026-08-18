import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Services from './components/Services'
import Stats from './components/Stats'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import CustomCursor from './components/CustomCursor'
import Preloader from './components/Preloader'
import { useState, useEffect } from 'react'

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2800)
    return () => clearTimeout(timer)
  }, [])

  if (loading) return <Preloader />

  return (
    <>
      <CustomCursor />
      <Navbar />
      <Hero />
      <About />
      <Stats />
      <Portfolio />
      <Services />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  )
}

export default App
