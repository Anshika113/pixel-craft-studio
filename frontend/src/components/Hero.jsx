import { motion } from 'framer-motion'
import { useEffect, useState, useRef } from 'react'
import { HiOutlineArrowDown } from 'react-icons/hi'
import './Hero.css'

const HERO_IMAGES = [
  'https://images.unsplash.com/photo-1519741497674-611481863552?w=1920&q=80',
  'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=1920&q=80',
  'https://images.unsplash.com/photo-1583089892943-e02e5b017b6a?w=1920&q=80',
  'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=1920&q=80',
]

const WORDS = ['Moments', 'Stories', 'Emotions', 'Dreams', 'Legacies']

export default function Hero() {
  const [currentImg, setCurrentImg] = useState(0)
  const [currentWord, setCurrentWord] = useState(0)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const heroRef = useRef(null)

  useEffect(() => {
    const interval = setInterval(() => setCurrentImg(p => (p + 1) % HERO_IMAGES.length), 5000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => setCurrentWord(p => (p + 1) % WORDS.length), 2500)
    return () => clearInterval(interval)
  }, [])

  const handleMouseMove = (e) => {
    if (!heroRef.current) return
    const rect = heroRef.current.getBoundingClientRect()
    setMousePos({
      x: (e.clientX - rect.left - rect.width / 2) / 40,
      y: (e.clientY - rect.top - rect.height / 2) / 40,
    })
  }

  return (
    <section id="home" className="hero-section" ref={heroRef} onMouseMove={handleMouseMove}>
      <div className="hero-bg">
        {HERO_IMAGES.map((img, i) => (
          <div
            key={i}
            className={`hero-slide ${i === currentImg ? 'active' : ''}`}
            style={{
              backgroundImage: `url(${img})`,
              transform: `translate(${mousePos.x * 0.5}px, ${mousePos.y * 0.5}px) scale(1.1)`,
            }}
          />
        ))}
        <div className="hero-overlay" />
        <div className="hero-grain" />
      </div>

      <div className="hero-content">
        <motion.div
          className="hero-label"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="hero-line" />
          <span>PREMIUM PHOTO & FILM STUDIO</span>
          <span className="hero-line" />
        </motion.div>

        <motion.h1
          className="hero-title"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          We Craft
          <br />
          <span className="hero-word-wrap">
            <span className="hero-word-static">Timeless </span>
            <span className="hero-word-animated" key={currentWord}>
              {WORDS[currentWord]}
            </span>
          </span>
        </motion.h1>

        <motion.p
          className="hero-subtitle"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          India's premier visual storytelling studio. From royal weddings
          to brand films — we turn your vision into art.
        </motion.p>

        <motion.div
          className="hero-buttons"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <a href="#portfolio" className="hero-btn primary cursor-hover" onClick={(e) => { e.preventDefault(); document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' }) }}>
            View Our Work
          </a>
          <a href="#contact" className="hero-btn secondary cursor-hover" onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) }}>
            Start Your Project
          </a>
        </motion.div>

        <motion.div
          className="hero-clients"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <span className="hero-clients-label">Trusted by</span>
          <div className="hero-clients-logos">
            {['Vogue India', 'Ogilvy', 'Tanishq', 'Sabyasachi', 'Netflix India'].map(name => (
              <span key={name} className="client-logo-text">{name}</span>
            ))}
          </div>
        </motion.div>
      </div>

      <motion.div
        className="hero-scroll"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <span>Scroll</span>
        <HiOutlineArrowDown className="hero-scroll-icon" />
      </motion.div>

      <div className="hero-side-text left">EST. 2010</div>
      <div className="hero-side-text right">MUMBAI . DELHI . JAIPUR</div>
    </section>
  )
}
