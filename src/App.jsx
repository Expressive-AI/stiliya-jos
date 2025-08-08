import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './sections/Hero'
import About from './sections/About'
import Services from './sections/Services'
import Publications from './sections/Publications'
import Skills from './sections/Skills'
import Scope from './sections/Scope'
import Contact from './sections/Contact'

function App() {
  return (
    <div className="min-h-dvh" style={{ backgroundColor: 'var(--color-bg)', color: 'var(--color-text)' }}>
      <Navbar />
      <main id="main" className="pt-16">
        <Hero />
        <About />
        <Services />
        <Publications />
        <Skills />
        <Scope />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
