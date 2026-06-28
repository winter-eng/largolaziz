'use client'

import { useState, useEffect } from 'react'
import Navbar from '@/components/layout/Navbar'
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Services from '@/components/sections/Services'
import WhyChooseMe from '@/components/sections/WhyChooseMe'
import Contact from '@/components/sections/Contact'
import Footer from '@/components/sections/Footer'
import FloatingPhone from '@/components/ui/FloatingPhone'
import ScrollToTop from '@/components/ui/ScrollToTop'
import LoadingScreen from '@/components/ui/LoadingScreen'

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const saved = localStorage.getItem('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const dark = saved ? saved === 'dark' : prefersDark
    setIsDark(dark)
    if (dark) {
      document.documentElement.classList.add('dark')
    }
  }, [])

  const toggleTheme = () => {
    setIsDark((prev) => {
      const next = !prev
      localStorage.setItem('theme', next ? 'dark' : 'light')
      if (next) {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
      return next
    })
  }

  const handleLoadingComplete = () => setIsLoading(false)

  return (
    <>
      {isLoading && <LoadingScreen onComplete={handleLoadingComplete} />}
      <div className={`min-h-screen bg-slate-50 dark:bg-[#0A0F1E] transition-colors duration-500 ${isLoading ? 'opacity-0' : 'opacity-100 transition-opacity duration-500'}`}>
        <Navbar isDark={isDark} toggleTheme={toggleTheme} />
        <main>
          <Hero />
          <About />
          <Services />
          <WhyChooseMe />
          <Contact />
        </main>
        <Footer />
        <FloatingPhone />
        <ScrollToTop />
      </div>
    </>
  )
}
