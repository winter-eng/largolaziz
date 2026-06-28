import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  // Safelist classes that are assembled as runtime strings inside JS objects
  // (Tailwind's content scanner can miss these on some CI environments)
  safelist: [
    // Services card gradients
    'from-blue-500', 'to-primary-600',
    'from-slate-500', 'to-slate-700',
    'from-amber-500', 'to-orange-500',
    'from-emerald-500',
    'from-purple-500', 'to-violet-600',
    'from-cyan-500', 'to-blue-500',
    'from-yellow-500',
    'from-accent-500', 'to-emerald-600',
    // Services card backgrounds
    'bg-blue-50', 'dark:bg-blue-900/20',
    'bg-slate-50', 'dark:bg-slate-800/40',
    'bg-amber-50', 'dark:bg-amber-900/20',
    'bg-emerald-50', 'dark:bg-emerald-900/20',
    'bg-purple-50', 'dark:bg-purple-900/20',
    'bg-cyan-50', 'dark:bg-cyan-900/20',
    'bg-yellow-50', 'dark:bg-yellow-900/20',
    'bg-green-50', 'dark:bg-green-900/20',
    // Services card borders
    'border-blue-100', 'dark:border-blue-800/30',
    'border-slate-200', 'dark:border-slate-700/30',
    'border-amber-100', 'dark:border-amber-800/30',
    'border-emerald-100', 'dark:border-emerald-800/30',
    'border-purple-100', 'dark:border-purple-800/30',
    'border-cyan-100', 'dark:border-cyan-800/30',
    'border-yellow-100', 'dark:border-yellow-800/30',
    'border-green-100', 'dark:border-green-800/30',
    // Icon colours used in object maps
    'text-primary-600', 'text-slate-600', 'dark:text-slate-400',
    'text-amber-600', 'text-emerald-600', 'text-purple-600',
    'text-cyan-600', 'text-yellow-600', 'text-accent-500',
    // WhyChooseMe quality card backgrounds
    'bg-primary-50', 'dark:bg-primary-900/20',
    'bg-amber-50', 'dark:bg-amber-900/20',
    'bg-emerald-50', 'dark:bg-emerald-900/20',
    'bg-yellow-50', 'dark:bg-yellow-900/20',
    'bg-purple-50', 'dark:bg-purple-900/20',
    'bg-rose-50', 'dark:bg-rose-900/20',
    // Quality icon colours
    'text-amber-600', 'text-purple-600', 'text-yellow-500', 'text-rose-500',
    // Stats icon colours
    'text-emerald-500',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2563EB',
          50: '#EFF6FF',
          100: '#DBEAFE',
          500: '#3B82F6',
          600: '#2563EB',
          700: '#1D4ED8',
          900: '#1E3A8A',
        },
        secondary: {
          DEFAULT: '#0F172A',
        },
        accent: {
          DEFAULT: '#22C55E',
          500: '#22C55E',
          600: '#16A34A',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}

export default config
