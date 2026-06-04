import { motion } from 'framer-motion'
import { Award } from 'lucide-react'
import { certifications } from '../data'

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 px-6 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="text-indigo-400 text-sm font-semibold uppercase tracking-widest">Credentials</span>
        <h2 className="text-4xl md:text-5xl font-black mt-2 text-white">Certifications</h2>
      </motion.div>

      <div className="relative max-w-2xl mx-auto">
        {/* Timeline line */}
        <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500 via-purple-500 to-transparent" />

        {certifications.map((cert, i) => (
          <motion.div
            key={cert.title}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="relative flex gap-6 mb-6 ml-3"
          >
            {/* Dot */}
            <div className="relative z-10 w-6 h-6 rounded-full bg-indigo-600 flex items-center justify-center shrink-0 mt-4">
              <div className="w-2 h-2 rounded-full bg-white" />
            </div>

            {/* Card */}
            <motion.div
              whileHover={{ x: 4 }}
              className="flex-1 glass rounded-2xl p-5 flex items-center justify-between"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-indigo-600/20 flex items-center justify-center">
                  <Award className="text-indigo-400" size={18} />
                </div>
                <div>
                  <p className="text-white font-semibold">{cert.title}</p>
                  <p className="text-slate-400 text-sm">{cert.issuer}</p>
                </div>
              </div>
              <span className="text-xs text-indigo-400 font-medium glass px-3 py-1 rounded-full">
                {cert.year}
              </span>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
