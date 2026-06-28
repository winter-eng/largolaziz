'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Truck } from 'lucide-react'

interface LoadingScreenProps {
  onComplete: () => void
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(timer)
          setTimeout(() => {
            setVisible(false)
            setTimeout(onComplete, 400)
          }, 200)
          return 100
        }
        return p + 4
      })
    }, 30)
    return () => clearInterval(timer)
  }, [onComplete])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.4, ease: 'easeInOut' }}
          className="fixed inset-0 z-[9999] bg-gradient-to-br from-slate-900 via-[#0D1B3E] to-slate-900 flex flex-col items-center justify-center"
        >
          {/* Animated truck icon */}
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            className="mb-8"
          >
            <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-primary-600 to-blue-700 flex items-center justify-center shadow-2xl shadow-primary-600/40">
              <Truck className="w-10 h-10 text-white" />
            </div>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-2xl sm:text-3xl font-bold text-white mb-1 text-center"
          >
            Abdusodiqov Abdulaziz
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-primary-400 font-medium mb-10 text-center"
          >
            Professional Haydovchi · Largo
          </motion.p>

          {/* Progress bar */}
          <div className="w-48 sm:w-64 h-1 bg-slate-700 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-primary-600 to-accent-500 rounded-full"
              style={{ width: `${progress}%` }}
              transition={{ duration: 0.05 }}
            />
          </div>
          <p className="text-slate-500 text-xs mt-3 font-medium">{progress}%</p>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
