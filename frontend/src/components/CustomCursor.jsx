import { useEffect, useState } from 'react'
import './CustomCursor.css'

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 })
  const [visible, setVisible] = useState(false)
  const [hover, setHover] = useState(false)

  useEffect(() => {
    const isTouchDevice = 'ontouchstart' in window
    if (isTouchDevice) return

    const move = (e) => {
      setPos({ x: e.clientX, y: e.clientY })
      setVisible(true)
    }
    const leave = () => setVisible(false)

    const handleHoverIn = () => setHover(true)
    const handleHoverOut = () => setHover(false)

    window.addEventListener('mousemove', move)
    window.addEventListener('mouseleave', leave)

    const observer = new MutationObserver(() => {
      document.querySelectorAll('a, button, .cursor-hover').forEach(el => {
        el.addEventListener('mouseenter', handleHoverIn)
        el.addEventListener('mouseleave', handleHoverOut)
      })
    })
    observer.observe(document.body, { childList: true, subtree: true })

    document.querySelectorAll('a, button, .cursor-hover').forEach(el => {
      el.addEventListener('mouseenter', handleHoverIn)
      el.addEventListener('mouseleave', handleHoverOut)
    })

    return () => {
      window.removeEventListener('mousemove', move)
      window.removeEventListener('mouseleave', leave)
      observer.disconnect()
    }
  }, [])

  if (typeof window !== 'undefined' && 'ontouchstart' in window) return null

  return (
    <>
      <div
        className={`cursor-dot ${visible ? 'visible' : ''} ${hover ? 'hover' : ''}`}
        style={{ left: pos.x, top: pos.y }}
      />
      <div
        className={`cursor-ring ${visible ? 'visible' : ''} ${hover ? 'hover' : ''}`}
        style={{ left: pos.x, top: pos.y }}
      />
    </>
  )
}
