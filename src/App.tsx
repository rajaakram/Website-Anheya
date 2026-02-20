import { useEffect, useState } from 'react'
import { Leaf, Github, Heart, Wind, Droplets, Sun } from 'lucide-react'
import OrganicBlob from './components/OrganicBlob'
import FloatingLeaf from './components/FloatingLeaf'
import BreathingCircle from './components/BreathingCircle'
import WaveBackground from './components/WaveBackground'

function App() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Animated Wave Background */}
      <WaveBackground />
      
      {/* Organic Blobs */}
      <div className="fixed inset-0 pointer-events-none">
        <OrganicBlob 
          className="top-[-10%] left-[-10%] w-[600px] h-[600px] opacity-40"
          color="from-teal-200/60 to-teal-300/40"
          animationDelay="0s"
        />
        <OrganicBlob 
          className="top-[20%] right-[-15%] w-[500px] h-[500px] opacity-35"
          color="from-sage-200/60 to-sage-300/40"
          animationDelay="2s"
        />
        <OrganicBlob 
          className="bottom-[-10%] left-[20%] w-[550px] h-[550px] opacity-40"
          color="from-sky-200/60 to-teal-200/40"
          animationDelay="4s"
        />
        <OrganicBlob 
          className="bottom-[10%] right-[10%] w-[400px] h-[400px] opacity-30"
          color="from-teal-100/60 to-sage-200/40"
          animationDelay="6s"
        />
      </div>

      {/* Floating Leaves */}
      <div className="fixed inset-0 pointer-events-none">
        <FloatingLeaf className="top-[15%] left-[8%]" delay="0s" size="lg" />
        <FloatingLeaf className="top-[25%] right-[12%]" delay="1s" size="md" />
        <FloatingLeaf className="top-[60%] left-[5%]" delay="2s" size="sm" />
        <FloatingLeaf className="top-[70%] right-[8%]" delay="3s" size="md" />
        <FloatingLeaf className="top-[40%] left-[15%]" delay="4s" size="sm" />
        <FloatingLeaf className="bottom-[20%] right-[15%]" delay="5s" size="lg" />
      </div>

      {/* Main Content */}
      <main className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
        
        {/* Breathing Circle Element */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
          <BreathingCircle />
        </div>

        {/* Content Container */}
        <div 
          className={`
            relative z-20 text-center max-w-2xl mx-auto
            transition-all duration-1000 ease-out
            ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
          `}
        >
          {/* Logo/Brand */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-teal-200/30 rounded-full blur-xl animate-pulse-soft" />
              <div className="relative p-4 bg-white/60 backdrop-blur-glass rounded-full border border-teal-100/50 shadow-lg">
                <Leaf className="w-12 h-12 text-teal-600 animate-sway" strokeWidth={1.5} />
              </div>
            </div>
          </div>

          {/* Brand Name */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light text-teal-900 mb-4 tracking-wide">
            Anheya
          </h1>

          {/* Tagline */}
          <p className="text-xl sm:text-2xl text-sage-600 font-light mb-8 tracking-widest uppercase">
            Wellness & Harmony
          </p>

          {/* Decorative Divider */}
          <div className="flex items-center justify-center gap-4 mb-10">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-teal-300" />
            <div className="flex gap-3">
              <Wind className="w-4 h-4 text-teal-400" strokeWidth={1.5} />
              <Droplets className="w-4 h-4 text-teal-500" strokeWidth={1.5} />
              <Sun className="w-4 h-4 text-teal-400" strokeWidth={1.5} />
            </div>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-teal-300" />
          </div>

          {/* Coming Soon Message */}
          <div className="mb-12">
            <div className="inline-block px-8 py-4 bg-white/50 backdrop-blur-glass rounded-2xl border border-teal-100/50 shadow-sm">
              <p className="text-lg text-teal-700 font-light tracking-wide">
                Coming Soon
              </p>
              <p className="text-sm text-sage-500 mt-2">
                A sanctuary for mind, body, and soul
              </p>
            </div>
          </div>

          {/* Description */}
          <p className="text-base text-sage-600 max-w-md mx-auto mb-12 leading-relaxed font-light">
            Embark on a journey of self-discovery and holistic wellness. 
            We're crafting a space where tranquility meets transformation.
          </p>

          {/* GitHub Link */}
          <a
            href="https://github.com/rajaakram/Website-Anheya"
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex items-center gap-2 px-6 py-3
              bg-white/60 hover:bg-white/80
              backdrop-blur-glass
              text-teal-700 hover:text-teal-800
              rounded-full border border-teal-100/50
              transition-all duration-300
              hover:shadow-lg hover:scale-105
              group
            "
          >
            <Github className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" strokeWidth={1.5} />
            <span className="text-sm font-medium">View on GitHub</span>
          </a>
        </div>

        {/* Footer */}
        <footer 
          className={`
            absolute bottom-8 left-0 right-0 text-center
            transition-all duration-1000 delay-500 ease-out
            ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
          `}
        >
          <p className="text-xs text-sage-400 flex items-center justify-center gap-1">
            Crafted with <Heart className="w-3 h-3 text-teal-400 fill-current animate-pulse-soft" /> for your well-being
          </p>
          <p className="text-xs text-sage-300 mt-1">
            &copy; {new Date().getFullYear()} Anheya. All rights reserved.
          </p>
        </footer>
      </main>
    </div>
  )
}

export default App
