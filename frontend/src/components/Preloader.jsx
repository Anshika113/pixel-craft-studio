import { motion } from 'framer-motion'
import './Preloader.css'

export default function Preloader() {
  return (
    <motion.div
      className="preloader"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="preloader-content">
        <motion.div
          className="preloader-logo"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="preloader-lens">
            <div className="lens-ring"></div>
            <div className="lens-ring ring-2"></div>
            <div className="lens-ring ring-3"></div>
            <div className="lens-dot"></div>
          </div>
        </motion.div>
        <motion.h1
          className="preloader-title"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          PIXELCRAFT
        </motion.h1>
        <motion.div
          className="preloader-bar-track"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <motion.div
            className="preloader-bar"
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ delay: 0.8, duration: 1.8, ease: 'easeInOut' }}
          />
        </motion.div>
      </div>
    </motion.div>
  )
}
