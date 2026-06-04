import { Mail, Phone, GitBranch, Link, Send, CheckCircle } from 'lucide-react'
import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { personalInfo } from '../data'

export default function Contact() {
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)
  const formRef = useRef<HTMLFormElement>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    await new Promise((r) => setTimeout(r, 1200))
    setLoading(false)
    setSent(true)
    formRef.current?.reset()
    setTimeout(() => setSent(false), 4000)
  }

  const socials = [
    { icon: <Link size={20} />, label: 'LinkedIn', href: personalInfo.linkedin, color: '#0ea5e9' },
    { icon: <GitBranch size={20} />, label: 'GitHub', href: personalInfo.github, color: '#8b5cf6' },
    { icon: <Mail size={20} />, label: personalInfo.email, href: `mailto:${personalInfo.email}`, color: '#6366f1' },
    { icon: <Phone size={20} />, label: personalInfo.phone, href: `tel:${personalInfo.phone}`, color: '#10b981' },
  ]

  return (
    <section id="contact" className="py-24 px-6 max-w-6xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
        <span className="text-sm font-semibold uppercase tracking-widest" style={{ color: '#818cf8' }}>Get In Touch</span>
        <h2 className="text-4xl md:text-5xl font-black mt-2 text-white">Contact Me</h2>
        <p className="mt-4 max-w-md mx-auto" style={{ color: '#94a3b8' }}>
          Open to internships, freelance work, and collaborations. Let's build something great together.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
            {[{ name: 'name', placeholder: 'Your Name', type: 'text' }, { name: 'email', placeholder: 'Your Email', type: 'email' }].map((f) => (
              <input key={f.name} name={f.name} type={f.type} placeholder={f.placeholder} required
                className="w-full glass rounded-xl px-5 py-3.5 text-white focus:outline-none bg-transparent transition-all"
                style={{ border: '1px solid rgba(255,255,255,0.06)', color: '#e2e8f0' }}
              />
            ))}
            <textarea name="message" placeholder="Your Message" required rows={5}
              className="w-full glass rounded-xl px-5 py-3.5 text-white focus:outline-none bg-transparent resize-none transition-all"
              style={{ border: '1px solid rgba(255,255,255,0.06)', color: '#e2e8f0' }}
            />
            <motion.button type="submit" disabled={loading || sent} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
              className="w-full py-3.5 rounded-xl text-white font-semibold flex items-center justify-center gap-2 transition-colors disabled:opacity-60"
              style={{ background: '#4f46e5' }}>
              {sent ? <><CheckCircle size={18} /> Message Sent!</> : loading
                ? <span className="w-5 h-5 border-2 rounded-full animate-spin" style={{ borderColor: 'rgba(255,255,255,0.3)', borderTopColor: 'white' }} />
                : <><Send size={16} /> Send Message</>}
            </motion.button>
          </form>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="flex flex-col justify-center space-y-4">
          <p className="text-lg font-semibold mb-2 text-white">Or reach me directly</p>
          {socials.map((s, i) => (
            <motion.a key={i} href={s.href} target="_blank" rel="noreferrer" whileHover={{ x: 6 }}
              className="flex items-center gap-4 glass rounded-xl p-4 transition-all" style={{ border: '1px solid rgba(255,255,255,0.05)' }}>
              <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: `${s.color}20`, color: s.color }}>
                {s.icon}
              </div>
              <span className="text-sm truncate" style={{ color: '#94a3b8' }}>{s.label}</span>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
