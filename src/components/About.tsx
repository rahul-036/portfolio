import { motion } from 'framer-motion'
import { GraduationCap, MapPin } from 'lucide-react'
import { personalInfo, stats } from '../data'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.6 } }),
}

export default function About() {
  return (
    <section id="about" className="py-24 px-6 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="text-indigo-400 text-sm font-semibold uppercase tracking-widest">About Me</span>
        <h2 className="text-4xl md:text-5xl font-black mt-2 text-white">Who I Am</h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-slate-400 text-lg leading-relaxed mb-8">
            I am a Computer Science and Business Systems student passionate about software development,
            problem solving, and building real-world applications. I enjoy creating scalable web solutions
            and continuously improving my skills through projects, coding challenges, and practical learning
            experiences.
          </p>

          <div className="glass rounded-2xl p-6 space-y-4">
            <div className="flex items-start gap-3">
              <GraduationCap className="text-indigo-400 mt-1 shrink-0" size={20} />
              <div>
                <p className="text-white font-semibold">{personalInfo.degree}</p>
                <p className="text-slate-400 text-sm">{personalInfo.year} · CGPA: {personalInfo.cgpa}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MapPin className="text-indigo-400 mt-1 shrink-0" size={20} />
              <p className="text-slate-400">{personalInfo.college}</p>
            </div>
          </div>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
              className="glass glass-hover rounded-2xl p-6 text-center"
            >
              <p className="text-3xl font-black gradient-text mb-1">{s.value}</p>
              <p className="text-slate-400 text-sm">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
