'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Truck, User, Award, TrendingUp } from 'lucide-react'

const stats = [
  { icon: Truck, value: '500+', label: 'Yetkazib berish', color: 'text-primary-600' },
  { icon: User, value: '200+', label: 'Mijozlar', color: 'text-accent-500' },
  { icon: Award, value: '3+', label: 'Yillik Tajriba', color: 'text-amber-500' },
  { icon: TrendingUp, value: '100%', label: 'Ishonchlilik', color: 'text-emerald-500' },
]

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
}

export default function About() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="section-padding bg-white dark:bg-slate-900/50">
      <div ref={ref} className="container-max">
        {/* Section header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 text-sm font-semibold rounded-full mb-4 border border-primary-100 dark:border-primary-800">
            Men haqimda
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Men kimman?
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary-600 to-accent-500 rounded-full mx-auto" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left — description */}
          <div>
            <motion.h3
              variants={fadeUp}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              custom={0.1}
              className="text-2xl font-bold text-slate-900 dark:text-white mb-5"
            >
              Abdusodiqov Abdulaziz —{' '}
              <span className="text-gradient">Sizning Ishonchli Haydovchingiz</span>
            </motion.h3>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              custom={0.2}
              className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed mb-5"
            >
              Men{' '}
              <span className="font-semibold text-primary-600 dark:text-primary-400">Largo</span>{' '}
              orqali ishonchli va o&apos;z vaqtida yuk yetkazib berish xizmatlarini ko&apos;rsataman.
              Avtomobil ehtiyot qismlari, g&apos;ildiraklar, shinalar, mebel, maishiy buyumlar,
              tijorat tovarlar va turli yuklarni to&apos;liq mas&apos;uliyat va g&apos;amxo&apos;rlik
              bilan tashiyman.
            </motion.p>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              custom={0.3}
              className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed mb-8"
            >
              Mijoz mamnuniyati, vaqtinchaligi va yukni xavfsizligi mening asosiy ustuvorliklarim.
              O&apos;z yengil yuk mashinam va professional yondashuvim bilan har bir yetkazib berish
              ideal holatda va o&apos;z vaqtida yetib borishini ta&apos;minlayman.
            </motion.p>

            {/* Info cards */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              custom={0.4}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { label: "To'liq ism", value: 'Abdusodiqov Abdulaziz' },
                { label: 'Yoshi', value: '26 yosh' },
                { label: 'Kompaniya', value: 'Largo' },
                { label: 'Transport', value: 'Yengil yuk mashinasi' },
              ].map((item) => (
                <div
                  key={item.label}
                  className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700"
                >
                  <p className="text-xs text-slate-400 dark:text-slate-500 font-medium uppercase tracking-wider mb-1">
                    {item.label}
                  </p>
                  <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">{item.value}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — Stats grid */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                variants={fadeUp}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                custom={0.2 + i * 0.1}
                whileHover={{ y: -4, scale: 1.02 }}
                className="glass-card rounded-3xl p-6 text-center group cursor-default transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-slate-100 dark:bg-slate-700/60 mb-4 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className={`w-6 h-6 ${stat.color}`} />
                </div>
                <p className={`text-3xl font-bold ${stat.color} mb-1`}>{stat.value}</p>
                <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
