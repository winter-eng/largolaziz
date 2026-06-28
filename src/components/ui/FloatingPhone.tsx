'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Phone } from 'lucide-react'
import { PHONE_HREF, PHONE_DISPLAY } from '@/lib/utils'

export default function FloatingPhone() {
  const [visible, setVisible] = useState(false)
  const [expanded, setExpanded] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5, x: 60 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          exit={{ opacity: 0, scale: 0.5, x: 60 }}
          transition={{ duration: 0.3, ease: 'backOut' }}
          className="fixed bottom-20 right-4 sm:right-6 z-40 flex items-center gap-3"
        >
          {/* Tooltip */}
          <AnimatePresence>
            {expanded && (
              <motion.a
                href={PHONE_HREF}
                initial={{ opacity: 0, x: 20, scale: 0.9 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: 20, scale: 0.9 }}
                transition={{ duration: 0.2 }}
                className="px-4 py-2.5 bg-accent-500 hover:bg-accent-600 text-white font-bold rounded-2xl shadow-lg shadow-accent-500/30 text-sm whitespace-nowrap transition-colors duration-200"
              >
                📞 {PHONE_DISPLAY}
              </motion.a>
            )}
          </AnimatePresence>

          {/* Main button */}
          <motion.button
            onClick={() => setExpanded((e) => !e)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="phone-pulse w-14 h-14 bg-accent-500 hover:bg-accent-600 rounded-2xl flex items-center justify-center shadow-xl shadow-accent-500/40 transition-colors duration-200"
            aria-label="Abdulazizga qo'ng'iroq qiling"
          >
            <Phone className="w-6 h-6 text-white" />
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
