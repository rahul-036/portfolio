import { motion } from 'framer-motion'
import { skills } from '../data'

const categoryColors: Record<string, string> = {
  Programming: '#6366f1',
  'Core Subjects': '#8b5cf6',
  Frontend: '#06b6d4',
  Backend: '#10b981',
  Databases: '#f59e0b',
  Tools: '#ec4899',
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="text-indigo-400 text-sm font-semibold uppercase tracking-widest">Expertise</span>
        <h2 className="text-4xl md:text-5xl font-black mt-2 text-white">Skills & Tech Stack</h2>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Object.entries(skills).map(([category, items], ci) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: ci * 0.1, duration: 0.6 }}
            whileHover={{ y: -4 }}
            className="glass rounded-2xl p-6"
            style={{ borderColor: `${categoryColors[category]}20` }}
          >
            <div className="flex items-center gap-3 mb-5">
              <div
                className="w-2.5 h-2.5 rounded-full"
                style={{ background: categoryColors[category], boxShadow: `0 0 10px ${categoryColors[category]}60` }}
              />
              <h3 className="text-white font-semibold">{category}</h3>
            </div>

            <div className="flex flex-wrap gap-2">
              {items.map((skill, si) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: ci * 0.1 + si * 0.05 }}
                  whileHover={{ scale: 1.08 }}
                  className="px-3 py-1.5 rounded-lg text-sm font-medium transition-all cursor-default"
                  style={{
                    background: `${categoryColors[category]}15`,
                    color: categoryColors[category],
                    border: `1px solid ${categoryColors[category]}25`,
                  }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
