import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { HiLocationMarker, HiPhone, HiMail, HiClock } from 'react-icons/hi'
import './Contact.css'

const CONTACT_INFO = [
  { icon: HiLocationMarker, label: 'Visit Us', value: 'Studio 405, Film City Road,\nGoregaon East, Mumbai 400065' },
  { icon: HiPhone, label: 'Call Us', value: '+91 98XXX XXXXX' },
  { icon: HiMail, label: 'Email Us', value: 'hello@pixelcraftstudios.in' },
  { icon: HiClock, label: 'Working Hours', value: 'Mon - Sat: 10AM - 7PM\nSun: By Appointment' },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '' })
  const [step, setStep] = useState(1)
  const [status, setStatus] = useState(null)
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const fd = new FormData()
      Object.entries(form).forEach(([k, v]) => fd.append(k, v))
      const res = await fetch('/api/contact', { method: 'POST', body: fd })
      const data = await res.json()
      setStatus('success')
      setForm({ name: '', email: '', phone: '', service: '', message: '' })
      setStep(1)
      setTimeout(() => setStatus(null), 5000)
    } catch {
      setStatus('error')
      setTimeout(() => setStatus(null), 5000)
    }
  }

  return (
    <section id="contact" className="contact section-padding" ref={ref}>
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <span className="label">Get In Touch</span>
        <h2>Let's Create Together</h2>
        <p>Tell us about your vision and let's bring it to life</p>
      </motion.div>

      <div className="contact-grid">
        <motion.div
          className="contact-info"
          initial={{ opacity: 0, x: -40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="contact-info-cards">
            {CONTACT_INFO.map((info, i) => (
              <div key={i} className="contact-info-card">
                <div className="contact-info-icon">
                  <info.icon size={22} />
                </div>
                <div>
                  <span className="contact-info-label">{info.label}</span>
                  <p className="contact-info-value" style={{ whiteSpace: 'pre-line' }}>{info.value}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="contact-map">
            <div className="map-placeholder">
              <div className="map-pin">
                <HiLocationMarker size={32} />
              </div>
              <span>Mumbai, Maharashtra</span>
              <span className="map-sub">Click to view on Google Maps</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="contact-form-wrap"
          initial={{ opacity: 0, x: 40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="form-steps">
            <div className={`form-step ${step >= 1 ? 'active' : ''}`}>
              <span className="step-num">01</span>
              <span>Your Info</span>
            </div>
            <div className="step-line" />
            <div className={`form-step ${step >= 2 ? 'active' : ''}`}>
              <span className="step-num">02</span>
              <span>Project Details</span>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="contact-form">
            {step === 1 && (
              <div className="form-fields">
                <div className="form-group">
                  <label>Full Name *</label>
                  <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Your name" required />
                </div>
                <div className="form-group">
                  <label>Email *</label>
                  <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="your@email.com" required />
                </div>
                <div className="form-group">
                  <label>Phone</label>
                  <input type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="+91 XXXXX XXXXX" />
                </div>
                <button
                  type="button"
                  className="form-next cursor-hover"
                  onClick={() => form.name && form.email && setStep(2)}
                >
                  Next Step
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14"/><path d="M12 5l7 7-7 7"/></svg>
                </button>
              </div>
            )}

            {step === 2 && (
              <div className="form-fields">
                <div className="form-group">
                  <label>Service Interested In</label>
                  <select name="service" value={form.service} onChange={handleChange}>
                    <option value="">Select a service</option>
                    <option value="wedding">Wedding Photography & Film</option>
                    <option value="corporate">Corporate & Events</option>
                    <option value="film">Ad Film / Brand Film</option>
                    <option value="fashion">Fashion & Editorial</option>
                    <option value="product">Product Photography</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Tell us about your project *</label>
                  <textarea name="message" value={form.message} onChange={handleChange} placeholder="Describe your vision, event date, location..." rows={4} required />
                </div>
                <div className="form-buttons">
                  <button type="button" className="form-back cursor-hover" onClick={() => setStep(1)}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M19 12H5"/><path d="M12 19l-7-7 7-7"/></svg>
                    Back
                  </button>
                  <button type="submit" className="form-submit cursor-hover" disabled={status === 'sending'}>
                    {status === 'sending' ? 'Sending...' : 'Send Inquiry'}
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M22 2L11 13"/><path d="M22 2L15 22l-4-9-9-4 20-7z"/></svg>
                  </button>
                </div>
              </div>
            )}

            {status === 'success' && (
              <div className="form-status success">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                Thank you! We'll get back to you within 24 hours.
              </div>
            )}
            {status === 'error' && (
              <div className="form-status error">
                Something went wrong. Please try again or call us directly.
              </div>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  )
}
