import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { HiChevronLeft, HiChevronRight, HiStar } from 'react-icons/hi'
import './Testimonials.css'

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState([])
  const [current, setCurrent] = useState(0)
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 })

  useEffect(() => {
    fetch('/api/testimonials').then(r => r.json()).then(d => { if (Array.isArray(d)) setTestimonials(d) }).catch(() => {})
  }, [])

  useEffect(() => {
    if (testimonials.length === 0) return
    const interval = setInterval(() => setCurrent(p => (p + 1) % testimonials.length), 6000)
    return () => clearInterval(interval)
  }, [testimonials.length])

  const prev = () => setCurrent(p => (p - 1 + testimonials.length) % testimonials.length)
  const next = () => setCurrent(p => (p + 1) % testimonials.length)

  if (testimonials.length === 0) return null

  const t = testimonials[current]

  return (
    <section id="testimonials" className="testimonials section-padding" ref={ref}>
      <div className="testimonials-bg-text">REVIEWS</div>

      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <span className="label">Testimonials</span>
        <h2>What Our Clients Say</h2>
        <p>Real stories from the people we've had the privilege to work with</p>
      </motion.div>

      <motion.div
        className="testimonial-carousel"
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <div className="testimonial-quote-mark">&ldquo;</div>
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            className="testimonial-slide"
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -60 }}
            transition={{ duration: 0.5 }}
          >
            <div className="testimonial-stars">
              {Array.from({ length: t.rating }).map((_, i) => (
                <HiStar key={i} className="star" />
              ))}
            </div>
            <p className="testimonial-text">{t.text}</p>
            <div className="testimonial-author">
              <div className="author-avatar">
                {t.name.split(' ').map(n => n[0]).slice(0, 2).join('')}
              </div>
              <div>
                <h4 className="author-name">{t.name}</h4>
                <p className="author-role">{t.role} &middot; {t.location}</p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="testimonial-controls">
          <button className="testimonial-nav cursor-hover" onClick={prev} aria-label="Previous">
            <HiChevronLeft size={24} />
          </button>
          <div className="testimonial-dots">
            {testimonials.map((_, i) => (
              <button
                key={i}
                className={`dot ${i === current ? 'active' : ''}`}
                onClick={() => setCurrent(i)}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
          <button className="testimonial-nav cursor-hover" onClick={next} aria-label="Next">
            <HiChevronRight size={24} />
          </button>
        </div>
      </motion.div>
    </section>
  )
}
