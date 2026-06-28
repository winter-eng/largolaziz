'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Phone, User, Building2, Briefcase, MapPin, type LucideIcon } from 'lucide-react'
import { PHONE_HREF, PHONE_DISPLAY } from '@/lib/utils'

interface ContactDetail {
  icon: LucideIcon
  label: string
  value: string
  isPhone?: boolean
}

const contactDetails: ContactDetail[] = [
  { icon: User, label: "To'liq ism", value: 'Abdusodiqov Abdulaziz' },
  { icon: Building2, label: 'Kompaniya', value: 'Largo' },
  { icon: Briefcase, label: 'Kasb', value: 'Professional Yetkazib beruvchi Haydovchi' },
  { icon: MapPin, label: 'Joylashuv', value: "O'zbekiston" },
  { icon: Phone, label: 'Telefon', value: PHONE_DISPLAY, isPhone: true },
]

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="contact" className="section-padding bg-slate-50 dark:bg-[#0A0F1E]">
      <div ref={ref} className="container-max">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-accent-500/10 dark:bg-accent-500/20 text-accent-600 dark:text-accent-400 text-sm font-semibold rounded-full mb-4 border border-accent-500/20">
            Murojaat qiling
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Men bilan <span className="text-gradient">Bog&apos;laning</span>
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-lg max-w-2xl mx-auto">
            Yukingizni yetkazishga tayyormisiz? Bitta qo&apos;ng&apos;iroq yetarli. Har doim mavjudman va yordam berishga tayyorman.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-primary-600 to-accent-500 rounded-full mx-auto mt-6" />
        </motion.div>

        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.97 }}
            animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="glass-card rounded-3xl overflow-hidden shadow-2xl"
          >
            {/* Card top bar */}
            <div className="h-1.5 bg-gradient-to-r from-primary-600 via-blue-500 to-accent-500" />

            <div className="p-8 sm:p-10">
              {/* Avatar / Name header */}
              <div className="flex items-center gap-5 mb-8 pb-8 border-b border-slate-200 dark:border-slate-700">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-600 to-blue-700 flex items-center justify-center shadow-lg shadow-primary-600/30 flex-shrink-0">
                  <span className="text-white text-2xl font-bold">A</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    Abdusodiqov Abdulaziz
                  </h3>
                  <p className="text-primary-600 dark:text-primary-400 font-medium text-sm">
                    Professional Yetkazib beruvchi Haydovchi
                  </p>
                  <div className="flex items-center gap-1.5 mt-1">
                    <span className="w-2 h-2 rounded-full bg-accent-500 animate-pulse" />
                    <span className="text-xs text-slate-400 dark:text-slate-500 font-medium">
                      Yetkazib berishga tayyor
                    </span>
                  </div>
                </div>
              </div>

              {/* Contact details */}
              <div className="space-y-4 mb-8">
                {contactDetails.map((detail, i) => (
                  <motion.div
                    key={detail.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.2 + i * 0.08 }}
                    className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700"
                  >
                    <div className="w-10 h-10 rounded-xl bg-primary-50 dark:bg-primary-900/30 flex items-center justify-center flex-shrink-0">
                      <detail.icon className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs text-slate-400 dark:text-slate-500 font-medium uppercase tracking-wider mb-0.5">
                        {detail.label}
                      </p>
                      <p className="text-sm font-semibold text-slate-800 dark:text-slate-200 truncate">
                        {detail.value}
                      </p>
                    </div>
                    {detail.isPhone === true && (
                      <a
                        href={PHONE_HREF}
                        className="flex-shrink-0 px-3 py-1.5 bg-accent-500 hover:bg-accent-600 text-white text-xs font-bold rounded-xl transition-colors duration-200"
                      >
                        Qo&apos;ng&apos;iroq
                      </a>
                    )}
                  </motion.div>
                ))}
              </div>

              {/* Big Call Now button */}
              <motion.a
                href={PHONE_HREF}
                whileHover={{ scale: 1.02, boxShadow: '0 20px 40px rgba(34,197,94,0.35)' }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="phone-pulse flex items-center justify-center gap-3 w-full py-5 bg-accent-500 hover:bg-accent-600 text-white text-xl font-bold rounded-2xl shadow-lg shadow-accent-500/30 transition-colors duration-200"
              >
                <Phone className="w-6 h-6" />
                <span>Qo&apos;ng&apos;iroq qiling — {PHONE_DISPLAY}</span>
              </motion.a>

              <p className="text-center text-xs text-slate-400 dark:text-slate-500 mt-4">
                To&apos;g&apos;ridan-to&apos;g&apos;ri qo&apos;ng&apos;iroq qilish uchun bosing. Haftaning 7 kuni mavjud.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
