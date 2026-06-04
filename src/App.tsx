import { useEffect } from 'react'
import { useTheme } from './hooks'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Certifications from './components/Certifications'
import CodingProfiles from './components/CodingProfiles'
import Contact from './components/Contact'
import Footer from './components/Footer'
import CustomCursor from './components/CustomCursor'

export default function App() {
  const { dark, toggle } = useTheme()

  useEffect(() => {
    document.body.style.background = dark ? '#0a0a0f' : '#f8fafc'
    document.body.style.color = dark ? '#e2e8f0' : '#0f172a'
  }, [dark])

  return (
    <div className={dark ? 'dark' : ''} style={{ cursor: 'none' }}>
      <CustomCursor />
      <Navbar dark={dark} toggle={toggle} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certifications />
        <CodingProfiles />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
