import { motion } from 'framer-motion'
import { ArrowUp } from 'lucide-react'
import { personalInfo } from '../data'

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-10 px-6 text-center relative">
      <p className="text-slate-500 text-sm">
        © {new Date().getFullYear()} <span className="text-indigo-400 font-medium">{personalInfo.name}</span> · Built with React, TypeScript & Tailwind CSS
      </p>

      <motion.button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 w-11 h-11 rounded-xl glass border border-white/10 flex items-center justify-center text-indigo-400 hover:text-white hover:bg-indigo-600 transition-all z-50"
      >
        <ArrowUp size={18} />
      </motion.button>
    </footer>
  )
}
