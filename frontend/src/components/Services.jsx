import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { HiCamera, HiFilm, HiOfficeBuilding, HiSparkles } from 'react-icons/hi'
import './Services.css'

const ICONS = { camera: HiCamera, film: HiFilm, briefcase: HiOfficeBuilding, sparkles: HiSparkles }

export default function Services() {
  const [services, setServices] = useState([])
  const [expanded, setExpanded] = useState(null)
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  useEffect(() => {
    fetch('/api/services').then(r => r.json()).then(d => { if (Array.isArray(d)) setServices(d) }).catch(() => {})
  }, [])

  return (
    <section id="services" className="services section-padding" ref={ref}>
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <span className="label">Services</span>
        <h2>What We Offer</h2>
        <p>Comprehensive visual solutions tailored for the Indian market</p>
      </motion.div>

      <div className="services-grid">
        {services.map((service, i) => {
          const Icon = ICONS[service.icon] || HiCamera
          const isExpanded = expanded === service.id
          return (
            <motion.div
              key={service.id}
              className={`service-card cursor-hover ${isExpanded ? 'expanded' : ''}`}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              onClick={() => setExpanded(isExpanded ? null : service.id)}
            >
              <div className="service-card-glow" />
              <div className="service-icon-wrap">
                <Icon size={28} />
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-desc">{service.description}</p>
              <div className="service-price">
                <span className="price-label">Starting from</span>
                <span className="price-value">{service.starting_price}</span>
              </div>
              <div className={`service-features ${isExpanded ? 'show' : ''}`}>
                {service.features?.map((f, j) => (
                  <div key={j} className="service-feature-item">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                    {f}
                  </div>
                ))}
              </div>
              <button className="service-toggle">
                {isExpanded ? 'Less Details' : 'View Details'}
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
                  style={{ transform: isExpanded ? 'rotate(180deg)' : '', transition: 'transform 0.3s' }}>
                  <polyline points="6 9 12 15 18 9"/>
                </svg>
              </button>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
