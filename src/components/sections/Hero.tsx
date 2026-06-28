'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Phone, MapPin, Star, Shield, Clock, User } from 'lucide-react'
import { PHONE_HREF, PHONE_DISPLAY } from '@/lib/utils'

const floatingBadges = [
  { icon: Star, label: '5★ Reyting', color: 'bg-amber-500' },
  { icon: Shield, label: 'Ishonchli', color: 'bg-primary-600' },
  { icon: Clock, label: "O'z vaqtida", color: 'bg-accent-500' },
]

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
}

export default function Hero() {
  const [imgError, setImgError] = useState(false)

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden pt-16"
    >
      {/* Animated background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/40 to-slate-100 dark:from-[#0A0F1E] dark:via-[#0D1B3E] dark:to-[#0A0F1E]" />
        <motion.div
          animate={{ x: [0, 30, 0], y: [0, -20, 0], scale: [1, 1.05, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-20 right-10 w-96 h-96 bg-primary-600/8 dark:bg-primary-600/15 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ x: [0, -25, 0], y: [0, 30, 0], scale: [1, 1.08, 1] }}
          transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className="absolute bottom-20 left-10 w-80 h-80 bg-accent-500/8 dark:bg-accent-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ x: [0, 20, 0], y: [0, 25, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
          className="absolute top-1/2 left-1/3 w-64 h-64 bg-blue-400/6 dark:bg-blue-400/10 rounded-full blur-3xl"
        />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNNjAgMEgwdjYwIiBzdHJva2U9IiMyNTYzRUIiIHN0cm9rZS13aWR0aD0iMC4xNSIgb3BhY2l0eT0iMC4zIi8+PC9nPjwvc3ZnPg==')] opacity-20 dark:opacity-10" />
      </div>

      <div className="container-max w-full px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left — Text content */}
          <div className="order-2 lg:order-1">
            {/* Badge */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.2}
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary-50 dark:bg-primary-900/30 border border-primary-200 dark:border-primary-700/50 rounded-full mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-accent-500 animate-pulse" />
              <span className="text-sm font-medium text-primary-700 dark:text-primary-300">
                Yetkazib berishga tayyor
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.3}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white leading-tight mb-3"
            >
              Abdusodiqov{' '}
              <span className="text-gradient">Abdulaziz</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.4}
              className="text-xl sm:text-2xl font-semibold text-slate-600 dark:text-slate-300 mb-2"
            >
              Professional Yetkazib beruvchi Haydovchi
            </motion.p>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.45}
              className="flex items-center gap-2 mb-6"
            >
              <MapPin className="w-4 h-4 text-primary-600" />
              <span className="text-slate-500 dark:text-slate-400 font-medium">
                <span className="text-primary-600 dark:text-primary-400 font-bold">Largo</span>{' '}
                kompaniyasi bilan ishlaydi
              </span>
            </motion.div>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.5}
              className="text-lg text-slate-500 dark:text-slate-400 leading-relaxed mb-8 max-w-lg"
            >
              Ishonchli Yuk Tashish — yukingizni xavfsiz, o&apos;z vaqtida va to&apos;liq mas&apos;uliyat bilan yetkazaman.
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.6}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.a
                href={PHONE_HREF}
                whileHover={{ scale: 1.03, boxShadow: '0 20px 40px rgba(34,197,94,0.35)' }}
                whileTap={{ scale: 0.97 }}
                className="phone-pulse flex items-center justify-center gap-3 px-8 py-4 bg-accent-500 hover:bg-accent-600 text-white text-lg font-bold rounded-2xl shadow-lg shadow-accent-500/30 transition-colors duration-200"
              >
                <Phone className="w-5 h-5" />
                <span>{PHONE_DISPLAY}</span>
              </motion.a>

              <motion.button
                onClick={() => {
                  document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })
                }}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center justify-center gap-2 px-8 py-4 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 text-lg font-semibold rounded-2xl border border-slate-200 dark:border-slate-600 shadow-md transition-all duration-200"
              >
                Xizmatlarni ko&apos;rish
              </motion.button>
            </motion.div>

            {/* Floating badges */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.7}
              className="flex items-center gap-3 mt-10 flex-wrap"
            >
              {floatingBadges.map(({ icon: Icon, label, color }) => (
                <div
                  key={label}
                  className="flex items-center gap-2 px-3 py-1.5 bg-white dark:bg-slate-800/80 rounded-full border border-slate-200 dark:border-slate-700 shadow-sm"
                >
                  <span className={`w-2 h-2 rounded-full ${color}`} />
                  <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">{label}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — Photo */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.85, x: 40 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="relative"
            >
              {/* Glow ring */}
              <motion.div
                animate={{ scale: [1, 1.04, 1], opacity: [0.5, 0.8, 0.5] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary-600/30 to-accent-500/20 blur-2xl -z-10 scale-105"
              />

              {/* Photo frame */}
              <div className="relative w-72 h-80 sm:w-80 sm:h-96 lg:w-96 lg:h-[480px] rounded-3xl overflow-hidden border-2 border-white/50 dark:border-slate-700/50 shadow-2xl">
                {imgError ? (
                  <div className="w-full h-full bg-gradient-to-br from-primary-600 to-blue-800 flex flex-col items-center justify-center">
                    <User className="w-24 h-24 text-white/40 mb-4" />
                    <p className="text-white/60 text-sm font-medium">Rasm qo&apos;shing:</p>
                    <p className="text-white/80 text-xs font-mono">/public/abdulaziz.jpg</p>
                  </div>
                ) : (
                  <Image
                    src="/abdulaziz.jpg"
                    alt="Abdusodiqov Abdulaziz - Professional Yetkazib beruvchi Haydovchi"
                    fill
                    priority
                    className="object-cover object-center"
                    sizes="(max-width: 640px) 288px, (max-width: 1024px) 320px, 384px"
                    onError={() => setImgError(true)}
                  />
                )}
                {/* Overlay gradient at bottom */}
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-slate-900/60 to-transparent" />

                {/* Company badge */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="glass rounded-2xl px-4 py-2.5 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-xl bg-primary-600 flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xs font-bold">L</span>
                    </div>
                    <div>
                      <p className="text-white text-xs font-semibold leading-tight">Largo Kompaniyasi</p>
                      <p className="text-slate-300 text-xs leading-tight">Rasmiy Haydovchi</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating stat cards */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-4 -left-4 sm:-left-8 glass-card rounded-2xl px-4 py-3 shadow-xl"
              >
                <p className="text-2xl font-bold text-slate-900 dark:text-white">3+</p>
                <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">Yillik Tajriba</p>
              </motion.div>

              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                className="absolute -bottom-4 -right-4 sm:-right-8 glass-card rounded-2xl px-4 py-3 shadow-xl"
              >
                <p className="text-2xl font-bold text-accent-500">500+</p>
                <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">Yetkazib berildi</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-slate-400 dark:text-slate-500 font-medium tracking-wider uppercase">Pastga</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-5 h-8 rounded-full border-2 border-slate-300 dark:border-slate-600 flex items-start justify-center pt-1.5"
        >
          <div className="w-1 h-2 bg-primary-600 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  )
}
