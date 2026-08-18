import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiOutlineMenuAlt3, HiX } from 'react-icons/hi'
import './Navbar.css'

const NAV_ITEMS = ['Home', 'About', 'Portfolio', 'Services', 'Testimonials', 'Contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const scrollTo = (id) => {
    setMenuOpen(false)
    const el = document.getElementById(id.toLowerCase())
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <nav
        className={`navbar ${scrolled ? 'scrolled' : ''}`}
      >
        <div className="nav-inner">
          <div className="nav-logo cursor-hover" onClick={() => scrollTo('home')}>
            <div className="logo-icon">
              <div className="logo-lens"></div>
            </div>
            <span className="logo-text">PIXEL<span className="logo-accent">CRAFT</span></span>
          </div>

          <ul className="nav-links">
            {NAV_ITEMS.map(item => (
              <li key={item}>
                <button className="nav-link cursor-hover" onClick={() => scrollTo(item)}>
                  {item}
                </button>
              </li>
            ))}
          </ul>

          <a href="#contact" className="nav-cta cursor-hover" onClick={(e) => { e.preventDefault(); scrollTo('contact') }}>
            Book Now
          </a>

          <button
            className="nav-hamburger cursor-hover"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <HiX size={28} /> : <HiOutlineMenuAlt3 size={28} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ clipPath: 'circle(0% at calc(100% - 40px) 40px)' }}
            animate={{ clipPath: 'circle(150% at calc(100% - 40px) 40px)' }}
            exit={{ clipPath: 'circle(0% at calc(100% - 40px) 40px)' }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
          >
            <div className="mobile-menu-content">
              {NAV_ITEMS.map((item, i) => (
                <motion.button
                  key={item}
                  className="mobile-link"
                  onClick={() => scrollTo(item)}
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.1 + i * 0.08 }}
                >
                  <span className="mobile-link-num">0{i + 1}</span>
                  {item}
                </motion.button>
              ))}
              <motion.a
                href="#contact"
                className="mobile-cta"
                onClick={(e) => { e.preventDefault(); scrollTo('contact') }}
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                Book Your Session
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
