import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { GitBranch, ExternalLink, ChevronDown, ChevronUp } from 'lucide-react'
import { projects } from '../data'

export default function Projects() {
  const [expanded, setExpanded] = useState<number | null>(null)

  return (
    <section id="projects" className="py-24 px-6 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="text-indigo-400 text-sm font-semibold uppercase tracking-widest">Portfolio</span>
        <h2 className="text-4xl md:text-5xl font-black mt-2 text-white">Featured Projects</h2>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.6 }}
            className="glass rounded-2xl overflow-hidden flex flex-col"
            style={{ borderColor: `${p.color}20` }}
          >
            {/* Top color bar */}
            <div className="h-1.5 w-full" style={{ background: `linear-gradient(90deg, ${p.color}, transparent)` }} />

            {/* Card body */}
            <div className="p-6 flex flex-col flex-1">
              <h3 className="text-white font-bold text-lg mb-2">{p.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">{p.description}</p>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-2 mb-4">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 text-xs rounded-lg font-medium"
                    style={{ background: `${p.color}15`, color: p.color, border: `1px solid ${p.color}25` }}
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Features toggle */}
              <button
                onClick={() => setExpanded(expanded === i ? null : i)}
                className="flex items-center gap-1 text-xs text-slate-500 hover:text-slate-300 transition-colors mb-2"
              >
                {expanded === i ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                {expanded === i ? 'Hide' : 'Show'} features
              </button>

              <AnimatePresence>
                {expanded === i && (
                  <motion.ul
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden mb-4"
                  >
                    {p.features.map((f) => (
                      <li key={f} className="text-xs text-slate-400 flex items-center gap-2 mb-1">
                        <span className="w-1 h-1 rounded-full" style={{ background: p.color }} />
                        {f}
                      </li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>

              {/* Buttons */}
              <div className="flex gap-3 mt-auto pt-2">
                <a
                  href={p.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg glass text-slate-300 hover:text-white text-sm font-medium transition-all border border-white/5 hover:border-white/10"
                >
                  <GitBranch size={14} /> GitHub
                </a>
                <a
                  href={p.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg text-sm font-medium transition-all text-white"
                  style={{ background: p.color }}
                >
                  <ExternalLink size={14} /> Live Demo
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
