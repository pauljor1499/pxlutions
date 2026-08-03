import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import ThemeToggle from './ThemeToggle'

const links = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [pillRect, setPillRect] = useState(null)
  const itemRefs = useRef({})
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [])

  useEffect(() => {
    const measure = () => {
      const el = itemRefs.current[pathname]
      if (el) setPillRect({ left: el.offsetLeft, width: el.offsetWidth })
    }
    measure()
    window.addEventListener('resize', measure)
    return () => window.removeEventListener('resize', measure)
  }, [pathname])

  return (
    <header
      className={`sticky top-0 z-50 bg-ink/95 backdrop-blur-xl transition-all duration-300 ${
        scrolled ? 'border-b border-line' : 'border-b border-transparent'
      }`}
    >
      <div className="container-px flex h-20 items-center justify-between py-4">
        <Link to="/" className="group flex items-center gap-2" onClick={() => setOpen(false)}>
          <span className="pixel-corners font-pixel flex h-9 w-9 items-center justify-center border border-line bg-surface text-xs font-bold text-accent transition-all group-hover:shadow-[0_0_20px_rgba(10,247,235,0.35)]">
            PXL
          </span>
          <span className="font-display text-lg font-semibold tracking-tight text-fg">
            PXLutions
          </span>
        </Link>

        <nav className="relative hidden items-center gap-1 md:flex">
          {pillRect && (
            <motion.span
              initial={false}
              animate={{ x: pillRect.left, width: pillRect.width }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-y-0 left-0 -z-10 rounded-full border border-cyan/30 bg-cyan/10"
            />
          )}
          {links.map((link) => (
            <NavLink
              key={link.to}
              ref={(el) => {
                itemRefs.current[link.to] = el
              }}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) =>
                `rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  isActive ? 'text-fg' : 'text-mist hover:text-fg'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle />

          <div className="hidden md:block">
            <Link to="/contact" className="btn-primary">
              Start a project
              <ArrowUpRight size={16} />
            </Link>
          </div>

          <button
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-line text-fg md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-line bg-ink/95 backdrop-blur-xl md:hidden"
          >
            <div className="container-px flex flex-col gap-1 py-4">
              {links.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.to === '/'}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `rounded-lg px-4 py-3 text-base font-medium ${
                      isActive ? 'bg-fg/5 text-fg' : 'text-mist'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="btn-primary mt-2 w-full"
              >
                Start a project
                <ArrowUpRight size={16} />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
