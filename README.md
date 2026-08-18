# PixelCraft Studios - Premium Photo & Film Studio Website

A stunning, fully interactive website for a premium photo & film production studio, built with **React.js** frontend and **FastAPI** Python backend. Designed for the Indian market with a dark luxury aesthetic, smooth animations, and responsive layout across all devices.

---

## Live Preview

> Start both servers (see Setup below) and open `http://localhost:5174`

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| **Frontend** | React 19 + Vite |
| **Backend** | FastAPI (Python) |
| **Animations** | Framer Motion |
| **Icons** | React Icons (HeroIcons + FontAwesome) |
| **Fonts** | Playfair Display, Outfit, Inter (Google Fonts) |
| **Styling** | Custom CSS with CSS Variables |

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
- **Hero** - Full-bleed image slideshow, trust badges (Vogue India, Ogilvy, Tanishq, Sabyasachi, Netflix India), dual CTAs
- **About** - Split layout with overlapping images, "15+ Years" animated badge, feature cards with hover effects
- **Stats** - Animated number counters (500+ weddings, 120+ brand films, 800+ happy clients, 25+ awards)
- **Portfolio** - 12 projects fetched from API, 7-category live filter (All / Weddings / Films / Commercial / Fashion / Portraits / Corporate), hover overlays with zoom effect
- **Services** - 4 service cards with INR pricing, expandable feature lists
- **Testimonials** - Auto-rotating carousel with star ratings, navigation dots, prev/next controls
- **Contact** - Multi-step inquiry form (Step 1: Info, Step 2: Project Details), contact info cards, map placeholder
- **Footer** - 4-column layout, social media links, animated heart

### Responsive Design
- **Desktop** (1280px+) - Full navigation, 3-column portfolio grid, 2-column contact layout
- **Tablet** (768px) - Hamburger menu, 2-column stats, stacked sections
- **Mobile** (375px) - Single column, full-width cards, stacked buttons, touch-optimized

### API Endpoints
| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/portfolio` | Get all portfolio items |
| `GET` | `/api/portfolio?category=wedding` | Filter by category |
| `GET` | `/api/services` | Get all services with pricing |
| `GET` | `/api/testimonials` | Get client testimonials |
| `GET` | `/api/stats` | Get studio statistics |
| `POST` | `/api/contact` | Submit inquiry form |

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
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css            # Global styles + variables
│   ├── index.html
│   ├── vite.config.js
│   └── package.json
├── backend/                     # FastAPI
│   └── main.py                  # API routes + data
└── README.md
```

---

## Setup & Installation

### Prerequisites
- Node.js 18+
- Python 3.9+
- npm

### 1. Clone the Repository
```bash
git clone https://github.com/Anshika113/pixel-craft-studio.git
cd pixel-craft-studio
```

### 2. Backend Setup
```bash
cd backend
pip install fastapi uvicorn python-multipart
python -m uvicorn main:app --host 0.0.0.0 --port 8001
```
Backend runs at `http://localhost:8001`

### 3. Frontend Setup
```bash
cd frontend
npm install
npm run dev
```
Frontend runs at `http://localhost:5174`

### 4. Open in Browser
Visit `http://localhost:5174` to see the website.

---

## Customization

### Change Studio Name
Edit the text in `Hero.jsx`, `Navbar.jsx`, and `Footer.jsx`

### Update Portfolio
Edit the `PORTFOLIO` list in `backend/main.py` — add your own images and project details

### Change Pricing
Edit the `SERVICES` list in `backend/main.py` — update INR prices

### Update Testimonials
Edit the `TESTIMONIALS` list in `backend/main.py`

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

## Screenshots

| Desktop | Mobile |
|---------|--------|
| Hero with slideshow & parallax | Responsive hero with stacked CTAs |
| Portfolio grid with hover overlays | Single-column portfolio |
| Service cards with INR pricing | Expandable service details |
| Multi-step contact form | Touch-optimized form |

---

## Design Credits

**Design & Developed by [Anshika](tel:8604438328)**

---

## License

This project is for client demonstration purposes.
