import { motion } from 'framer-motion'
import { GitBranch, Link, Mail, Phone, Download, ChevronDown } from 'lucide-react'
import { useTypewriter } from '../hooks'
import { personalInfo } from '../data'

const floatingIcons = [
  { label: 'React', top: '15%', left: '8%', delay: 0 },
  { label: 'TS', top: '25%', right: '10%', delay: 0.2 },
  { label: 'Java', top: '60%', left: '5%', delay: 0.4 },
  { label: 'SQL', top: '70%', right: '8%', delay: 0.6 },
  { label: '⚡', top: '40%', left: '3%', delay: 0.8 },
  { label: '🚀', top: '50%', right: '4%', delay: 1 },
]

export default function Hero() {
  const typed = useTypewriter(personalInfo.roles)
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(rgba(99,102,241,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(99,102,241,0.03) 1px,transparent 1px)', backgroundSize: '60px 60px' }} />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none" style={{ background: 'rgba(99,102,241,0.08)', filter: 'blur(120px)' }} />

      {floatingIcons.map((icon, i) => (
        <motion.div
          key={i}
          className="absolute hidden lg:flex items-center justify-center w-12 h-12 glass rounded-xl text-sm font-bold"
          style={{ top: icon.top, left: (icon as any).left, right: (icon as any).right, color: '#818cf8' }}
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 3 + i * 0.4, repeat: Infinity, delay: icon.delay, ease: 'easeInOut' }}
        >
          {icon.label}
        </motion.div>
      ))}

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <span className="inline-block px-4 py-1.5 rounded-full glass text-sm mb-6" style={{ color: '#818cf8', border: '1px solid rgba(99,102,241,0.2)' }}>
            👋 Available for Internships & Freelance
          </span>

          <h1 className="text-5xl md:text-7xl font-black mb-4 leading-tight text-white">
            Hi, I'm <span className="gradient-text">Rahul V</span>
          </h1>

          <div className="text-2xl md:text-4xl font-semibold mb-6 h-12 flex items-center justify-center gap-2" style={{ color: '#cbd5e1' }}>
            <span>{typed}</span>
            <span className="w-[3px] h-8 rounded animate-pulse" style={{ background: '#818cf8' }} />
          </div>

          <p className="text-lg max-w-2xl mx-auto mb-10 leading-relaxed" style={{ color: '#94a3b8' }}>
            {personalInfo.tagline}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-14">
            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }} onClick={() => scrollTo('projects')}
              className="px-7 py-3 rounded-xl text-white font-semibold transition-colors" style={{ background: '#4f46e5' }}>
              View Projects
            </motion.button>
            <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }} href="/RAHUL_RESUME.pdf" download
              className="px-7 py-3 rounded-xl glass text-white font-semibold flex items-center gap-2 transition-all" style={{ border: '1px solid rgba(255,255,255,0.1)' }}>
              <Download size={16} /> Resume
            </motion.a>
            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }} onClick={() => scrollTo('contact')}
              className="px-7 py-3 rounded-xl glass text-white font-semibold transition-all" style={{ border: '1px solid rgba(255,255,255,0.1)' }}>
              Contact Me
            </motion.button>
          </div>

          <div className="flex items-center justify-center gap-4">
            {[
              { icon: <GitBranch size={20} />, href: personalInfo.github },
              { icon: <Link size={20} />, href: personalInfo.linkedin },
              { icon: <Mail size={20} />, href: `mailto:${personalInfo.email}` },
              { icon: <Phone size={20} />, href: `tel:${personalInfo.phone}` },
            ].map((s, i) => (
              <motion.a key={i} href={s.href} target="_blank" rel="noreferrer" whileHover={{ scale: 1.15, y: -2 }}
                className="w-10 h-10 glass rounded-xl flex items-center justify-center transition-colors"
                style={{ color: '#94a3b8', border: '1px solid rgba(255,255,255,0.05)' }}>
                {s.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>

      <motion.button onClick={() => scrollTo('about')} animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 transition-colors" style={{ color: '#64748b' }}>
        <ChevronDown size={28} />
      </motion.button>
    </section>
  )
}
