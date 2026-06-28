'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Moon, Sun, Menu, X, Truck } from 'lucide-react'
import { cn, PHONE_HREF, PHONE_DISPLAY } from '@/lib/utils'

const navLinks = [
  { label: 'Bosh sahifa', href: '#home' },
  { label: 'Men haqimda', href: '#about' },
  { label: 'Xizmatlar', href: '#services' },
  { label: 'Nima uchun men', href: '#why-choose' },
  { label: 'Aloqa', href: '#contact' },
]

interface NavbarProps {
  isDark: boolean
  toggleTheme: () => void
}

export default function Navbar({ isDark, toggleTheme }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20)

      const sections = ['home', 'about', 'services', 'why-choose', 'contact']
      const current = sections.find((id) => {
        const el = document.getElementById(id)
        if (!el) return false
        const rect = el.getBoundingClientRect()
        return rect.top <= 100 && rect.bottom >= 100
      })
      if (current) setActiveSection(current)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (href: string) => {
    const id = href.replace('#', '')
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
    setMobileOpen(false)
  }

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          scrolled
            ? 'bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl shadow-lg border-b border-slate-200/50 dark:border-slate-700/50'
            : 'bg-transparent'
        )}
      >
        <nav className="container-max flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <motion.a
            href="#home"
            onClick={(e) => { e.preventDefault(); scrollTo('#home') }}
            className="flex items-center gap-2 group"
            whileHover={{ scale: 1.02 }}
          >
            <div className="w-9 h-9 rounded-xl bg-primary-600 flex items-center justify-center shadow-md shadow-primary-600/30">
              <Truck className="w-5 h-5 text-white" />
            </div>
            <div className="hidden sm:block">
              <p className="text-sm font-bold text-slate-900 dark:text-white leading-tight">Abdulaziz</p>
              <p className="text-xs text-primary-600 leading-tight">Haydovchi · Largo</p>
            </div>
          </motion.a>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => scrollTo(link.href)}
                  className={cn(
                    'relative px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-200',
                    activeSection === link.href.replace('#', '')
                      ? 'text-primary-600 dark:text-primary-400'
                      : 'text-slate-600 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-primary-50 dark:hover:bg-primary-900/20'
                  )}
                >
                  {activeSection === link.href.replace('#', '') && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-0 bg-primary-50 dark:bg-primary-900/30 rounded-lg"
                    />
                  )}
                  <span className="relative">{link.label}</span>
                </button>
              </li>
            ))}
          </ul>

          {/* Right actions */}
          <div className="flex items-center gap-3">
            <motion.a
              href={PHONE_HREF}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hidden sm:flex items-center gap-2 px-4 py-2 bg-accent-500 hover:bg-accent-600 text-white text-sm font-semibold rounded-xl shadow-md shadow-accent-500/30 transition-colors duration-200"
            >
              <span>Qo&apos;ng&apos;iroq</span>
            </motion.a>

            <motion.button
              onClick={toggleTheme}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-9 h-9 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors duration-200"
              aria-label="Mavzuni o'zgartirish"
            >
              {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </motion.button>

            <motion.button
              onClick={() => setMobileOpen((o) => !o)}
              whileTap={{ scale: 0.9 }}
              className="md:hidden w-9 h-9 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-700 dark:text-slate-300"
              aria-label="Menyuni ochish"
            >
              {mobileOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </motion.button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-16 left-0 right-0 z-40 bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border-b border-slate-200/50 dark:border-slate-700/50 shadow-xl md:hidden"
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className={cn(
                    'w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-colors duration-200',
                    activeSection === link.href.replace('#', '')
                      ? 'bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400'
                      : 'text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800'
                  )}
                >
                  {link.label}
                </button>
              ))}
              <a
                href={PHONE_HREF}
                className="flex items-center justify-center gap-2 w-full mt-2 py-3 bg-accent-500 hover:bg-accent-600 text-white font-semibold rounded-xl transition-colors duration-200"
              >
                <span>📞 {PHONE_DISPLAY}</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
