import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import './About.css'

export default function About() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 })

  return (
    <section id="about" className="about section-padding" ref={ref}>
      <div className="about-grid">
        <motion.div
          className="about-images"
          initial={{ opacity: 0, x: -60 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="about-img-stack">
            <div className="about-img-main">
              <img
                src="https://images.unsplash.com/photo-1554048612-b6a482bc67e5?w=600&q=80"
                alt="Studio workspace"
                loading="lazy"
              />
              <div className="about-img-border" />
            </div>
            <div className="about-img-secondary">
              <img
                src="https://images.unsplash.com/photo-1471341971476-ae15ff5dd4ea?w=400&q=80"
                alt="Behind the scenes"
                loading="lazy"
              />
            </div>
            <div className="about-experience-badge">
              <span className="badge-number">15+</span>
              <span className="badge-text">Years of<br/>Excellence</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="about-content"
          initial={{ opacity: 0, x: 60 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="about-label">OUR STORY</span>
          <h2 className="about-title">
            Where Vision Meets<br />
            <span className="text-gold">Artistry</span>
          </h2>
          <p className="about-desc">
            Born in the heart of Mumbai, PixelCraft Studios has spent over a decade
            transforming India's visual storytelling landscape. From the royal palaces of
            Rajasthan to the bustling streets of Delhi, we've captured over 500 weddings
            and produced 120+ brand films for India's most prestigious names.
          </p>
          <p className="about-desc">
            Our philosophy is simple — every frame should tell a story, evoke an emotion,
            and stand the test of time. We don't just take photographs or shoot films;
            we craft visual legacies.
          </p>

          <div className="about-features">
            <div className="about-feature">
              <div className="feature-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
              </div>
              <div>
                <h4>Same-Day Edits</h4>
                <p>Highlight reels delivered at your reception</p>
              </div>
            </div>
            <div className="about-feature">
              <div className="feature-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>
              </div>
              <div>
                <h4>4K Cinematic</h4>
                <p>Broadcast-quality capture on every project</p>
              </div>
            </div>
            <div className="about-feature">
              <div className="feature-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 000-7.78z"/></svg>
              </div>
              <div>
                <h4>Crafted With Love</h4>
                <p>Every project gets our full creative devotion</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
