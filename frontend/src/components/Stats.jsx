import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useEffect, useState } from 'react'
import './Stats.css'

function AnimatedNumber({ target, inView }) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!inView) return
    let start = 0
    const duration = 2000
    const step = target / (duration / 16)
    const timer = setInterval(() => {
      start += step
      if (start >= target) { setCount(target); clearInterval(timer) }
      else setCount(Math.floor(start))
    }, 16)
    return () => clearInterval(timer)
  }, [inView, target])
  return <span>{count}+</span>
}

const STATS = [
  { value: 500, label: 'Weddings Filmed', icon: '💍' },
  { value: 120, label: 'Brand Films', icon: '🎬' },
  { value: 800, label: 'Happy Clients', icon: '😊' },
  { value: 25, label: 'Awards Won', icon: '🏆' },
]

export default function Stats() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 })

  return (
    <section className="stats section-padding" ref={ref}>
      <div className="stats-grid">
        {STATS.map((stat, i) => (
          <motion.div
            key={i}
            className="stat-card"
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: i * 0.15 }}
          >
            <div className="stat-icon">{stat.icon}</div>
            <div className="stat-value">
              <AnimatedNumber target={stat.value} inView={inView} />
            </div>
            <div className="stat-label">{stat.label}</div>
            <div className="stat-glow" />
          </motion.div>
        ))}
      </div>
    </section>
  )
}
