import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import { codingProfiles } from '../data'

export default function CodingProfiles() {
  return (
    <section id="coding" className="py-24 px-6 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="text-indigo-400 text-sm font-semibold uppercase tracking-widest">Performance</span>
        <h2 className="text-4xl md:text-5xl font-black mt-2 text-white">Coding Profiles</h2>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6">
        {codingProfiles.map((p, i) => (
          <motion.a
            key={p.platform}
            href={p.link}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.6 }}
            whileHover={{ y: -6, scale: 1.02 }}
            className="glass rounded-2xl p-8 text-center group relative overflow-hidden cursor-pointer"
            style={{ borderColor: `${p.color}25` }}
          >
            {/* Glow bg */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{ background: `radial-gradient(circle at 50% 0%, ${p.color}15, transparent 70%)` }}
            />

            <div
              className="w-16 h-16 rounded-2xl mx-auto mb-5 flex items-center justify-center text-2xl font-black"
              style={{ background: `${p.color}20`, color: p.color, border: `1px solid ${p.color}30` }}
            >
              {p.platform[0]}
            </div>

            <h3 className="text-white font-bold text-xl mb-2">{p.platform}</h3>
            <p className="font-semibold mb-1" style={{ color: p.color }}>{p.stats}</p>
            <p className="text-slate-400 text-sm mb-6">{p.detail}</p>

            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all"
              style={{ background: `${p.color}20`, color: p.color, border: `1px solid ${p.color}30` }}
            >
              View Profile <ExternalLink size={14} />
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  )
}
