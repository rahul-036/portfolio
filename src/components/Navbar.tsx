import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useScrollProgress } from '../hooks'
import { Sun, Moon, Menu, X } from 'lucide-react'

const links = ['About', 'Skills', 'Projects', 'Certifications', 'Coding', 'Contact']

export default function Navbar({ dark, toggle }: { dark: boolean; toggle: () => void }) {
  const progress = useScrollProgress()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const scrollTo = (id: string) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })
    setOpen(false)
  }

  return (
    <>
      <div className="fixed top-0 left-0 right-0 h-[2px] z-[100]">
        <div className="h-full" style={{ width: `${progress}%`, background: 'linear-gradient(90deg, #6366f1, #8b5cf6, #06b6d4)' }} />
      </div>

      <motion.nav initial={{ y: -80 }} animate={{ y: 0 }} transition={{ duration: 0.6 }}
        className={`fixed top-[2px] left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass' : ''}`}
        style={scrolled ? { borderBottom: '1px solid rgba(255,255,255,0.05)' } : {}}>
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <motion.span className="text-xl font-bold gradient-text cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} whileHover={{ scale: 1.05 }}>
            Rahul V
          </motion.span>

          <div className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <button key={l} onClick={() => scrollTo(l)} className="text-sm transition-colors duration-200" style={{ color: '#94a3b8' }}
                onMouseEnter={e => (e.target as HTMLElement).style.color = '#fff'}
                onMouseLeave={e => (e.target as HTMLElement).style.color = '#94a3b8'}>
                {l}
              </button>
            ))}
            <button onClick={toggle} className="transition-colors" style={{ color: '#94a3b8' }}>
              {dark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>

          <div className="flex md:hidden items-center gap-4">
            <button onClick={toggle} style={{ color: '#94a3b8' }}>{dark ? <Sun size={18} /> : <Moon size={18} />}</button>
            <button onClick={() => setOpen(!open)} style={{ color: '#94a3b8' }}>{open ? <X size={20} /> : <Menu size={20} />}</button>
          </div>
        </div>

        {open && (
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="md:hidden glass px-6 py-4 flex flex-col gap-4" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
            {links.map((l) => (
              <button key={l} onClick={() => scrollTo(l)} className="text-sm text-left transition-colors" style={{ color: '#94a3b8' }}>{l}</button>
            ))}
          </motion.div>
        )}
      </motion.nav>
    </>
  )
}
