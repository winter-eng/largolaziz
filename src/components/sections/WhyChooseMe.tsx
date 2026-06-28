'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { CheckCircle2, Clock, ShieldCheck, Star, MessageSquare, Heart } from 'lucide-react'
import { PHONE_HREF, PHONE_DISPLAY } from '@/lib/utils'

const qualities = [
  {
    icon: CheckCircle2,
    title: "Mas'uliyatli",
    description: "Har bir yetkazib berishni shaxsan qabul qilaman. Sizning yukingiz olib ketishdan yetkazib berishgacha ishonchli qo'llarda.",
    color: 'text-primary-600',
    bg: 'bg-primary-50 dark:bg-primary-900/20',
  },
  {
    icon: Clock,
    title: "O'z Vaqtida Yetkazish",
    description: "Vaqtinchaligi mening ishimning asosi. Har doim belgilangan vaqtda kelaman.",
    color: 'text-amber-600',
    bg: 'bg-amber-50 dark:bg-amber-900/20',
  },
  {
    icon: ShieldCheck,
    title: 'Yukni Ehtiyotkorlik bilan Davolash',
    description: "Har bir narsa maksimal ehtiyotkorlik bilan yuklanadi, mahkamlanadi va shikastsiz yetkaziladi.",
    color: 'text-accent-500',
    bg: 'bg-emerald-50 dark:bg-emerald-900/20',
  },
  {
    icon: Star,
    title: 'Ishonchli Xizmat',
    description: "Har buyurtma uchun tayanishingiz mumkin bo'lgan izchil sifat va ishonchli xizmat.",
    color: 'text-yellow-500',
    bg: 'bg-yellow-50 dark:bg-yellow-900/20',
  },
  {
    icon: MessageSquare,
    title: 'Professional Muloqot',
    description: "Butun yetkazib berish jarayoni davomida aniq, tezkor va professional muloqot.",
    color: 'text-purple-600',
    bg: 'bg-purple-50 dark:bg-purple-900/20',
  },
  {
    icon: Heart,
    title: "Mijozga E'tibor",
    description: "Mijoz mamnuniyati mening eng yuqori ustuvorligim. Ehtiyojlaringizni qondirish uchun qo'shimcha harakat qilaman.",
    color: 'text-rose-500',
    bg: 'bg-rose-50 dark:bg-rose-900/20',
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const itemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  },
}

export default function WhyChooseMe() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="why-choose" className="section-padding bg-white dark:bg-slate-900/50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          animate={{ x: [0, 20, 0], y: [0, -15, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-0 right-0 w-96 h-96 bg-primary-600/5 dark:bg-primary-600/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ x: [0, -15, 0], y: [0, 20, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
          className="absolute bottom-0 left-0 w-72 h-72 bg-accent-500/5 dark:bg-accent-500/10 rounded-full blur-3xl"
        />
      </div>

      <div className="container-max">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-accent-500/10 dark:bg-accent-500/20 text-accent-600 dark:text-accent-400 text-sm font-semibold rounded-full mb-4 border border-accent-500/20">
            Nima uchun ishonish kerak
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Nima uchun <span className="text-gradient">Abdulazizni</span> tanlash kerak?
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-lg max-w-2xl mx-auto">
            Mijozlar qayta-qayta murojaat qiladigan olti sabab. Professional, vaqtinchal va yukingizni birinchi o&apos;ringa qo&apos;yadi.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-primary-600 to-accent-500 rounded-full mx-auto mt-6" />
        </motion.div>

        {/* Qualities grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
        >
          {qualities.map((q) => (
            <motion.div
              key={q.title}
              variants={itemVariants}
              whileHover={{ y: -6, scale: 1.01 }}
              className="glass-card rounded-3xl p-6 group transition-all duration-300 hover:shadow-xl"
            >
              <div className={`inline-flex w-12 h-12 items-center justify-center rounded-2xl ${q.bg} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <q.icon className={`w-6 h-6 ${q.color}`} />
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                ✔ {q.title}
              </h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                {q.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.97 }}
          animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="relative rounded-3xl overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary-600 via-primary-700 to-blue-800" />
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent-500 rounded-full blur-3xl" />
          </div>
          <div className="relative px-8 py-12 sm:py-16 text-center">
            <p className="text-blue-200 text-sm font-semibold uppercase tracking-widest mb-3">
              Yetkazib berishga tayyor
            </p>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3">
              Ishonchli Haydovchi kerakmi?
            </h3>
            <p className="text-blue-200 text-lg mb-8 max-w-xl mx-auto">
              Hozir qo&apos;ng&apos;iroq qiling — yukingizni professional va g&apos;amxo&apos;rlik bilan yetkazaman.
            </p>
            <motion.a
              href={PHONE_HREF}
              whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(0,0,0,0.3)' }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-3 px-8 py-4 bg-accent-500 hover:bg-accent-600 text-white text-lg font-bold rounded-2xl shadow-xl transition-colors duration-200"
            >
              <span>📞</span>
              <span>{PHONE_DISPLAY}</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
