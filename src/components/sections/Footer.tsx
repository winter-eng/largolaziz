'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Truck, Phone } from 'lucide-react'
import { PHONE_HREF, PHONE_DISPLAY } from '@/lib/utils'

const navLinks = [
  { label: 'Bosh sahifa', href: '#home' },
  { label: 'Men haqimda', href: '#about' },
  { label: 'Xizmatlar', href: '#services' },
  { label: 'Nima uchun men', href: '#why-choose' },
  { label: 'Aloqa', href: '#contact' },
]

export default function Footer() {
  const [logoError, setLogoError] = useState(false)

  const scrollTo = (href: string) => {
    const id = href.replace('#', '')
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="bg-slate-900 dark:bg-[#060B18] text-slate-400 border-t border-slate-800">
      <div className="container-max px-4 sm:px-6 lg:px-8">

        {/* Main footer content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-10 h-10 rounded-xl bg-primary-600 flex items-center justify-center shadow-lg shadow-primary-600/30">
                <Truck className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-white font-bold leading-tight">Abdulaziz</p>
                <p className="text-primary-400 text-xs leading-tight">Yetkazib beruvchi Haydovchi</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed max-w-xs">
              O&apos;zbekistonda professional yuk yetkazib berish xizmati. Ishonchli, vaqtinchal va g&apos;amxo&apos;r tashish Largo orqali.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Tezkor Havolalar
            </h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-sm hover:text-primary-400 transition-colors duration-200"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Aloqa
            </h4>
            <div className="space-y-3">
              <div>
                <p className="text-xs text-slate-500 uppercase tracking-wider mb-1">Telefon</p>
                <a
                  href={PHONE_HREF}
                  className="flex items-center gap-2 text-white font-semibold hover:text-accent-500 transition-colors duration-200"
                >
                  <Phone className="w-4 h-4 text-accent-500" />
                  {PHONE_DISPLAY}
                </a>
              </div>
              <div>
                <p className="text-xs text-slate-500 uppercase tracking-wider mb-1">Kompaniya</p>
                <p className="text-white font-semibold">Largo</p>
              </div>
            </div>

            <motion.a
              href={PHONE_HREF}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 mt-5 px-5 py-2.5 bg-accent-500 hover:bg-accent-600 text-white text-sm font-semibold rounded-xl transition-colors duration-200"
            >
              <Phone className="w-4 h-4" />
              Qo&apos;ng&apos;iroq qiling
            </motion.a>
          </div>
        </div>

        {/* ═══ LARGO LOGO SECTION ═══ */}
        <div className="py-8 border-t border-slate-800">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <p className="text-slate-500 text-sm font-medium uppercase tracking-widest">
              Rasmiy hamkor:
            </p>

            {/* Largo Logo placeholder — joylashtiring: /public/largo-logo.png */}
            <div className="flex items-center justify-center">
              {!logoError ? (
                <div className="relative h-12 w-40">
                  <Image
                    src="/largo-logo.png"
                    alt="Largo kompaniyasi logotipi"
                    fill
                    className="object-contain object-center"
                    sizes="160px"
                    onError={() => setLogoError(true)}
                  />
                </div>
              ) : (
                /* ← Bu joy Largo logotipi uchun.
                   /public/ papkasiga largo-logo.png fayl qo'ying — logo avtomatik chiqadi. */
                <div className="flex items-center gap-3 px-6 py-3 rounded-2xl border-2 border-dashed border-slate-600 hover:border-primary-500 transition-colors duration-300 group cursor-default">
                  <div className="w-9 h-9 rounded-xl bg-primary-600/20 border border-primary-600/40 flex items-center justify-center group-hover:bg-primary-600/30 transition-colors duration-300">
                    <span className="text-primary-400 font-black text-lg">L</span>
                  </div>
                  <div className="text-left">
                    <p className="text-white font-bold text-base leading-tight tracking-wide">LARGO</p>
                    <p className="text-slate-500 text-xs leading-tight">largo-logo.png qo&apos;ying</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-sm text-center sm:text-left">
            © 2026{' '}
            <span className="text-white font-semibold">Abdusodiqov Abdulaziz</span>
          </p>
          <p className="text-sm text-center sm:text-right">
            Professional Yetkazib beruvchi Haydovchi ·{' '}
            <span className="text-primary-400 font-semibold">Largo</span> bilan ishlaydi
          </p>
        </div>
      </div>
    </footer>
  )
}
