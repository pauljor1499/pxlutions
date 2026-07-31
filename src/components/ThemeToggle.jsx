import { motion } from 'framer-motion'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'

export default function ThemeToggle({ className = '' }) {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isDark}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      onClick={toggleTheme}
      className={`relative flex h-9 w-16 shrink-0 items-center rounded-full border border-line bg-fg/[0.04] px-1 transition-colors duration-300 ${className}`}
    >
      <Sun size={13} className="absolute left-[7px] text-mist" />
      <Moon size={13} className="absolute right-[7px] text-mist" />
      <motion.span
        initial={false}
        animate={{ x: isDark ? 28 : 0 }}
        transition={{ type: 'spring', stiffness: 500, damping: 45 }}
        className="relative z-10 flex h-7 w-7 items-center justify-center rounded-full bg-cyan text-black shadow-[0_0_12px_rgba(10,247,235,0.5)]"
      >
        {isDark ? <Moon size={14} /> : <Sun size={14} />}
      </motion.span>
    </button>
  )
}
