import { HiHeart } from 'react-icons/hi'
import { FaInstagram, FaYoutube, FaVimeoV, FaPinterestP, FaWhatsapp } from 'react-icons/fa'
import './Footer.css'

const SOCIALS = [
  { icon: FaInstagram, label: 'Instagram', href: '#' },
  { icon: FaYoutube, label: 'YouTube', href: '#' },
  { icon: FaVimeoV, label: 'Vimeo', href: '#' },
  { icon: FaPinterestP, label: 'Pinterest', href: '#' },
  { icon: FaWhatsapp, label: 'WhatsApp', href: '#' },
]

const LINKS = {
  'Quick Links': ['Home', 'About', 'Portfolio', 'Services', 'Contact'],
  'Services': ['Wedding Photography', 'Film Production', 'Corporate Events', 'Fashion Editorial', 'Product Shoots'],
  'Locations': ['Mumbai', 'Delhi NCR', 'Jaipur', 'Goa', 'Udaipur'],
}

export default function Footer() {
  const scrollTo = (id) => {
    const el = document.getElementById(id.toLowerCase())
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <div className="footer-logo">
            <div className="footer-logo-icon">
              <div className="footer-lens"></div>
            </div>
            <span className="footer-logo-text">PIXEL<span className="logo-accent">CRAFT</span></span>
          </div>
          <p className="footer-tagline">
            India's premier visual storytelling studio. Crafting timeless
            moments through the art of photography and film.
          </p>
          <div className="footer-socials">
            {SOCIALS.map(s => (
              <a key={s.label} href={s.href} className="social-link cursor-hover" aria-label={s.label}>
                <s.icon size={18} />
              </a>
            ))}
          </div>
        </div>

        {Object.entries(LINKS).map(([title, links]) => (
          <div key={title} className="footer-col">
            <h4 className="footer-col-title">{title}</h4>
            <ul>
              {links.map(link => (
                <li key={link}>
                  <button
                    className="footer-link cursor-hover"
                    onClick={() => scrollTo(link.split(' ')[0])}
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="footer-divider" />

      <div className="footer-bottom">
        <p className="footer-copy">
          &copy; 2024 PixelCraft Studios. All rights reserved.
        </p>
        <p className="footer-credit">
          Design & Developed by{' '}
          <a href="tel:8604438328" className="footer-credit-name cursor-hover" id="anshika-link">
            Anshika
          </a>
          {' '}<HiHeart className="footer-heart" />
        </p>
      </div>
    </footer>
  )
}
