import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import './Portfolio.css'

const CATEGORIES = [
  { key: 'all', label: 'All Work' },
  { key: 'wedding', label: 'Weddings' },
  { key: 'film', label: 'Films' },
  { key: 'commercial', label: 'Commercial' },
  { key: 'fashion', label: 'Fashion' },
  { key: 'portrait', label: 'Portraits' },
  { key: 'corporate', label: 'Corporate' },
]

export default function Portfolio() {
  const [active, setActive] = useState('all')
  const [items, setItems] = useState([])
  const [hovered, setHovered] = useState(null)
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  useEffect(() => {
    fetch(`/api/portfolio${active !== 'all' ? `?category=${active}` : ''}`)
      .then(r => r.json())
      .then(data => { if (Array.isArray(data)) setItems(data) })
      .catch(() => {})
  }, [active])

  return (
    <section id="portfolio" className="portfolio section-padding" ref={ref}>
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <span className="label">Portfolio</span>
        <h2>Our Finest Work</h2>
        <p>A curated collection of our most compelling visual stories across India</p>
      </motion.div>

      <motion.div
        className="portfolio-filters"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {CATEGORIES.map(cat => (
          <button
            key={cat.key}
            className={`filter-btn cursor-hover ${active === cat.key ? 'active' : ''}`}
            onClick={() => setActive(cat.key)}
          >
            {cat.label}
            {active === cat.key && (
              <motion.div className="filter-active-bg" layoutId="activeFilter" />
            )}
          </button>
        ))}
      </motion.div>

      <div className="portfolio-grid">
        <AnimatePresence mode="popLayout">
          {items.map((item, i) => (
            <motion.div
              key={item.id}
              className="portfolio-item cursor-hover"
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              onMouseEnter={() => setHovered(item.id)}
              onMouseLeave={() => setHovered(null)}
            >
              <div className="portfolio-img-wrap">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className={hovered === item.id ? 'zoomed' : ''}
                />
                <div className={`portfolio-overlay ${hovered === item.id ? 'visible' : ''}`}>
                  <div className="portfolio-overlay-content">
                    <span className="portfolio-category">{item.category}</span>
                    <h3>{item.title}</h3>
                    <span className="portfolio-location">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
                      {item.location}
                    </span>
                  </div>
                  <div className="portfolio-view-btn">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  )
}
