import { useState, useEffect } from 'react'
import './App.css'

// Information from daily-context.json (simulated or hardcoded based on what I just wrote)
const context = {
  theme: {
    name: "Hyper-Dimensional Cosmic Glassmorphism",
  },
  components: {
    hero_text: "ASCEND TO THE COSMOS",
    subtitle: "Experience the next dimension of digital interaction with our quantum-powered interface.",
    button_label: "INITIATE SEQUENCE",
    badge_text: "PROTOCOL v1.1 — COSMIC EDITION"
  }
}

export default function App() {
  const [count, setCount] = useState(0)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="relative min-h-screen selection:bg-cosmic-primary selection:text-cosmic-bg font-body">
      {/* Background Elements */}
      <div className="fixed inset-0 bg-cosmic-bg -z-20 overflow-hidden">
        <div className="nebula nebula-1" />
        <div className="nebula nebula-2" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20 pointer-events-none" />
      </div>

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'py-4 glass-panel border-b' : 'py-8 bg-transparent'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cosmic-primary to-cosmic-accent animate-pulse" />
            <span className="font-heading text-xl font-bold tracking-tighter text-glow">AXON_</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-medium tracking-widest uppercase">
            <a href="#" className="hover:text-cosmic-primary transition-colors">Dimension</a>
            <a href="#" className="hover:text-cosmic-primary transition-colors">Quantum</a>
            <a href="#" className="hover:text-cosmic-primary transition-colors">Neural</a>
            <button 
              onClick={() => setCount(c => c + 1)}
              className="px-6 py-2 glass-panel rounded-full text-xs border-cosmic-primary/30 hover:border-cosmic-primary transition-all active:scale-95"
            >
              SYNC_STATUS: {count}
            </button>
          </div>
        </div>
      </nav>

      <main className="relative z-10 pt-32 pb-20">
        {/* Hero Section */}
        <section className="container mx-auto px-6 mb-32">
          <div className="max-w-4xl">
            <div className="inline-block px-4 py-1 mb-6 rounded-full glass-panel border-cosmic-primary/20 text-cosmic-primary text-[10px] font-bold tracking-[0.3em] uppercase animate-glow-pulse">
              {context.components.badge_text}
            </div>
            <h1 className="font-heading text-5xl md:text-8xl font-bold leading-tight mb-8 tracking-tighter text-glow">
              {context.components.hero_text.split(' ').map((word, i) => (
                <span key={i} className={i === 2 ? 'text-transparent bg-clip-text bg-gradient-to-r from-cosmic-primary to-cosmic-accent' : ''}>
                  {word}{' '}
                </span>
              ))}
            </h1>
            <p className="text-xl md:text-2xl text-cosmic-muted max-w-2xl mb-12 leading-relaxed">
              {context.components.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <button className="px-10 py-5 bg-cosmic-primary text-cosmic-bg font-bold rounded-xl button-glow tracking-widest uppercase text-sm">
                {context.components.button_label}
              </button>
              <button className="px-10 py-5 glass-panel border-white/10 rounded-xl hover:bg-white/5 transition-colors tracking-widest uppercase text-sm">
                VIEW_ARCHIVE
              </button>
            </div>
          </div>
        </section>

        {/* Bento Grid Features */}
        <section className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6 mb-32">
          <div className="md:col-span-2 glass-panel p-10 rounded-3xl glow-border">
            <div className="w-12 h-12 mb-6 rounded-xl bg-cosmic-primary/10 flex items-center justify-center text-cosmic-primary">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 22.5 12 13.5H3.75z" />
              </svg>
            </div>
            <h3 className="font-heading text-2xl mb-4">Hyper-Speed Neural Processing</h3>
            <p className="text-cosmic-muted leading-relaxed">Our quantum-driven core processes complex UI architectures in milliseconds, ensuring seamless interaction across all dimensions of the digital space.</p>
          </div>
          
          <div className="glass-panel p-10 rounded-3xl glow-border">
            <div className="w-12 h-12 mb-6 rounded-xl bg-cosmic-accent/10 flex items-center justify-center text-cosmic-accent">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
              </svg>
            </div>
            <h3 className="font-heading text-2xl mb-4">Multi-Dimensional Layouts</h3>
            <p className="text-cosmic-muted leading-relaxed">Dynamic grid systems that adapt to any viewport with gravitational precision.</p>
          </div>

          <div className="glass-panel p-10 rounded-3xl glow-border">
            <h3 className="font-heading text-2xl mb-4">Secure Protocol</h3>
            <div className="space-y-4">
              {[1, 2, 3].map(i => (
                <div key={i} className="flex items-center gap-4 p-3 rounded-lg bg-white/5 border border-white/5">
                  <div className="w-2 h-2 rounded-full bg-cosmic-primary shadow-[0_0_8px_rgba(0,245,255,0.8)]" />
                  <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-cosmic-primary" style={{ width: `${Math.random() * 60 + 40}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="md:col-span-2 glass-panel p-10 rounded-3xl glow-border flex flex-col md:flex-row gap-10 items-center">
            <div className="flex-1">
              <h3 className="font-heading text-2xl mb-4">Immersive Visual Fidelity</h3>
              <p className="text-cosmic-muted leading-relaxed">Experience the +10 Spectacular enhancement with high-blur glassmorphism and animated cosmic backgrounds that respond to user intent.</p>
            </div>
            <div className="w-full md:w-48 h-48 rounded-2xl bg-gradient-to-tr from-cosmic-primary/20 via-cosmic-accent/20 to-transparent border border-white/10 flex items-center justify-center relative overflow-hidden group">
              <div className="absolute inset-0 bg-cosmic-primary/10 scale-0 group-hover:scale-150 transition-transform duration-700 rounded-full blur-3xl" />
              <span className="font-heading text-4xl font-bold text-white/20 group-hover:text-cosmic-primary/40 transition-colors">10+</span>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="container mx-auto px-6 border-t border-white/10 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-cosmic-muted text-sm tracking-widest">© 2026 AXON DIGITAL — ALL RIGHTS RESERVED</p>
          <div className="flex gap-8 text-xs font-bold tracking-[0.2em] uppercase">
            <a href="#" className="hover:text-cosmic-primary transition-colors">Twitter</a>
            <a href="#" className="hover:text-cosmic-primary transition-colors">Discord</a>
            <a href="#" className="hover:text-cosmic-primary transition-colors">Bluesky</a>
          </div>
        </footer>
      </main>
    </div>
  )
}
