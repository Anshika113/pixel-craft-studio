# PixelCraft Studios - Premium Photo & Film Studio Website

A stunning, fully interactive website for a premium photo & film production studio, built with **React.js** and designed for the Indian market with a dark luxury aesthetic, smooth animations, and responsive layout across all devices.

**Deployed on Cloudflare Pages** as a fully static site — no backend required.

---

## Live Preview

**[https://pixel-craft-studio.pages.dev](https://pixel-craft-studio.pages.dev)**

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| **Frontend** | React 19 + Vite |
| **Animations** | Framer Motion |
| **Icons** | React Icons (HeroIcons + FontAwesome) |
| **Fonts** | Playfair Display, Outfit, Inter (Google Fonts) |
| **Styling** | Custom CSS with CSS Variables |
| **Deployment** | Cloudflare Pages |

---

## Features

### Design & UX
- Dark luxury theme with gold accent palette
- Custom animated cursor (desktop only)
- Smooth page preloader with lens animation
- Parallax mouse-tracking hero section
- Rotating word animation in hero title
- Glass-morphism navbar with scroll detection
- Circle-reveal mobile menu animation

### Sections
- **Hero** - Full-bleed image slideshow with parallax, trust badges (Vogue India, Ogilvy, Tanishq, Sabyasachi, Netflix India), dual CTAs
- **About** - Split layout with overlapping images, "15+ Years" animated badge, feature cards with hover effects
- **Stats** - Animated number counters (500+ weddings, 120+ brand films, 800+ happy clients, 25+ awards)
- **Portfolio** - 12 projects with 7-category live filter (All / Weddings / Films / Commercial / Fashion / Portraits / Corporate), hover overlays with zoom effect
- **Services** - 4 service cards with INR pricing (Rs 40,000 - Rs 2,00,000), expandable feature lists
- **Testimonials** - Auto-rotating carousel with star ratings, navigation dots, prev/next controls
- **Contact** - Multi-step inquiry form (Step 1: Your Info, Step 2: Project Details), contact info cards, map placeholder
- **Footer** - 4-column layout, social media links (Instagram, YouTube, Vimeo, Pinterest, WhatsApp), animated heart

### Responsive Design
- **Desktop** (1280px+) - Full navigation, 3-column portfolio grid, 2-column contact layout
- **Tablet** (768px) - Hamburger menu, 2-column stats, stacked sections
- **Mobile** (375px) - Single column, full-width cards, stacked buttons, touch-optimized

---

## Project Structure

```
pixel-craft-studio/
├── frontend/                    # React + Vite
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx       # Fixed navbar + mobile menu
│   │   │   ├── Hero.jsx         # Hero slideshow + parallax
│   │   │   ├── About.jsx        # About section + images
│   │   │   ├── Stats.jsx        # Animated counters
│   │   │   ├── Portfolio.jsx    # Filterable portfolio grid
│   │   │   ├── Services.jsx     # Service cards + pricing
│   │   │   ├── Testimonials.jsx # Review carousel
│   │   │   ├── Contact.jsx      # Multi-step form
│   │   │   ├── Footer.jsx       # Footer with socials
│   │   │   ├── Preloader.jsx    # Loading animation
│   │   │   ├── CustomCursor.jsx # Custom cursor effect
│   │   │   └── *.css            # Component styles
│   │   ├── data.js              # All portfolio, services & testimonial data
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css            # Global styles + variables
│   ├── index.html
│   ├── vite.config.js
│   └── package.json
├── backend/                     # FastAPI (optional, for local dev)
│   └── main.py
└── README.md
```

---

## Cloudflare Pages Deployment

### Build Settings (in Cloudflare Dashboard)
| Setting | Value |
|---------|-------|
| **Build command** | `cd frontend && npm install && npm run build` |
| **Build output directory** | `frontend/dist` |
| **Root directory** | `/` |
| **Node.js version** | `18` |

---

## Local Development

### Prerequisites
- Node.js 18+
- npm

### Setup
```bash
git clone https://github.com/Anshika113/pixel-craft-studio.git
cd pixel-craft-studio/frontend
npm install
npm run dev
```
Open `http://localhost:5173` in your browser.

---

## Customization

### Change Studio Name
Edit the text in `Hero.jsx`, `Navbar.jsx`, and `Footer.jsx`

### Update Portfolio
Edit the `PORTFOLIO` array in `frontend/src/data.js` — add your own images and project details

### Change Pricing
Edit the `SERVICES` array in `frontend/src/data.js` — update INR prices

### Update Testimonials
Edit the `TESTIMONIALS` array in `frontend/src/data.js`

### Change Colors
Edit CSS variables in `frontend/src/index.css`:
```css
:root {
  --gold: #c9a84c;        /* Primary accent */
  --gold-light: #e8d48b;  /* Hover states */
  --gold-dark: #a07c2a;   /* Darker accent */
  --black: #0a0a0a;       /* Background */
}
```

---

## Design Credits

**Design & Developed by [Anshika](tel:8604438328)**

---

## License

This project is for client demonstration purposes.
