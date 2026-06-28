'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  Truck,
  Package,
  Home,
  Armchair,
  Building2,
  Zap,
  ShieldCheck,
  CircleDot,
} from 'lucide-react'

const services = [
  {
    icon: Truck,
    emoji: '🚚',
    title: 'Yuk Yetkazib Berish',
    description: 'Yengil yuk mashinasi yordamida har turdagi yuklarni xavfsiz va ishonchli yetkazib berish.',
    color: 'from-blue-500 to-primary-600',
    bg: 'bg-blue-50 dark:bg-blue-900/20',
    border: 'border-blue-100 dark:border-blue-800/30',
    iconColor: 'text-primary-600',
  },
  {
    icon: CircleDot,
    emoji: '🛞',
    title: "G'ildirak va Shinalar",
    description: "Avto g'ildiraklar, shinalar va ehtiyot qismlarni ixtisoslashtirilgan tashish.",
    color: 'from-slate-500 to-slate-700',
    bg: 'bg-slate-50 dark:bg-slate-800/40',
    border: 'border-slate-200 dark:border-slate-700/30',
    iconColor: 'text-slate-600 dark:text-slate-400',
  },
  {
    icon: Package,
    emoji: '📦',
    title: 'Paket Yetkazib Berish',
    description: "Buyurtmalar va paketlarni ehtiyotkorlik bilan davolash va o'z vaqtida yetkazib berish.",
    color: 'from-amber-500 to-orange-500',
    bg: 'bg-amber-50 dark:bg-amber-900/20',
    border: 'border-amber-100 dark:border-amber-800/30',
    iconColor: 'text-amber-600',
  },
  {
    icon: Home,
    emoji: '🏠',
    title: 'Maishiy Tovarlar',
    description: "Maishiy buyumlarni alohida e'tibor va g'amxo'rlik bilan tashish.",
    color: 'from-emerald-500 to-accent-500',
    bg: 'bg-emerald-50 dark:bg-emerald-900/20',
    border: 'border-emerald-100 dark:border-emerald-800/30',
    iconColor: 'text-emerald-600',
  },
  {
    icon: Armchair,
    emoji: '🪑',
    title: 'Mebel Tashish',
    description: "Har o'lchamdagi mebel buyumlarini professional ko'chirish va yetkazib berish.",
    color: 'from-purple-500 to-violet-600',
    bg: 'bg-purple-50 dark:bg-purple-900/20',
    border: 'border-purple-100 dark:border-purple-800/30',
    iconColor: 'text-purple-600',
  },
  {
    icon: Building2,
    emoji: '🏢',
    title: 'Biznes Yetkazib Berish',
    description: "Biznes va korxonalar uchun ishonchli tijorat yuk yetkazib berish xizmati.",
    color: 'from-cyan-500 to-blue-500',
    bg: 'bg-cyan-50 dark:bg-cyan-900/20',
    border: 'border-cyan-100 dark:border-cyan-800/30',
    iconColor: 'text-cyan-600',
  },
  {
    icon: Zap,
    emoji: '⚡',
    title: 'Tez Yetkazib Berish',
    description: "Vaqt muhim bo'lganda tezkor yuk yetkazib berish. Tez va samarali.",
    color: 'from-yellow-500 to-amber-500',
    bg: 'bg-yellow-50 dark:bg-yellow-900/20',
    border: 'border-yellow-100 dark:border-yellow-800/30',
    iconColor: 'text-yellow-600',
  },
  {
    icon: ShieldCheck,
    emoji: '✅',
    title: 'Xavfsiz Tashish',
    description: "To'liq yuk xavfsizligi kafolatlangan. Olib ketishdan yetkazib berishgacha mas'uliyatli munosabat.",
    color: 'from-accent-500 to-emerald-600',
    bg: 'bg-green-50 dark:bg-green-900/20',
    border: 'border-green-100 dark:border-green-800/30',
    iconColor: 'text-accent-500',
  },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  },
}

export default function Services() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="services" className="section-padding bg-slate-50 dark:bg-[#0A0F1E]">
      <div className="container-max">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 text-sm font-semibold rounded-full mb-4 border border-primary-100 dark:border-primary-800">
            Nima taklif qilaman
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Mening <span className="text-gradient">Xizmatlarim</span>
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-lg max-w-2xl mx-auto">
            Kichik paketlardan tortib og&apos;ir mebelgacha — har qanday ehtiyoj uchun to&apos;liq yuk yetkazib berish yechimlari.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-primary-600 to-accent-500 rounded-full mx-auto mt-6" />
        </motion.div>

        {/* Cards grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              className={`relative rounded-3xl p-6 border ${service.bg} ${service.border} shadow-sm hover:shadow-xl transition-all duration-300 cursor-default group overflow-hidden`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-3xl`} />

              <div className="w-12 h-12 rounded-2xl bg-white dark:bg-slate-800 flex items-center justify-center mb-4 shadow-sm group-hover:scale-110 transition-transform duration-300">
                <service.icon className={`w-6 h-6 ${service.iconColor}`} />
              </div>

              <span className="text-2xl mb-3 block group-hover:scale-110 transition-transform duration-300 origin-left">
                {service.emoji}
              </span>

              <h3 className="font-bold text-slate-900 dark:text-white text-base mb-2 leading-tight">
                {service.title}
              </h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
