const WaveBackground = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* SVG Waves */}
      <svg
        className="absolute bottom-0 left-0 w-full"
        viewBox="0 0 1440 400"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="waveGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ccfbf1" stopOpacity="0.3" />
            <stop offset="50%" stopColor="#e0f2fe" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#ccfbf1" stopOpacity="0.3" />
          </linearGradient>
          <linearGradient id="waveGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#99f6e4" stopOpacity="0.2" />
            <stop offset="50%" stopColor="#bae6fd" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#99f6e4" stopOpacity="0.2" />
          </linearGradient>
          <linearGradient id="waveGradient3" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#c7d0c7" stopOpacity="0.25" />
            <stop offset="50%" stopColor="#e3e7e3" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#c7d0c7" stopOpacity="0.25" />
          </linearGradient>
        </defs>

        {/* Wave 1 - Back */}
        <path
          className="animate-pulse-soft"
          style={{
            animation: 'wave1 15s ease-in-out infinite',
          }}
          d="M0,200 C240,150 480,250 720,200 C960,150 1200,250 1440,200 L1440,400 L0,400 Z"
          fill="url(#waveGradient1)"
        />

        {/* Wave 2 - Middle */}
        <path
          style={{
            animation: 'wave2 12s ease-in-out infinite',
          }}
          d="M0,250 C360,200 720,300 1080,250 C1260,225 1350,275 1440,250 L1440,400 L0,400 Z"
          fill="url(#waveGradient2)"
        />

        {/* Wave 3 - Front */}
        <path
          style={{
            animation: 'wave3 10s ease-in-out infinite',
          }}
          d="M0,300 C180,280 360,320 540,300 C720,280 900,320 1080,300 C1260,280 1350,320 1440,300 L1440,400 L0,400 Z"
          fill="url(#waveGradient3)"
        />
      </svg>

      {/* Top decorative wave */}
      <svg
        className="absolute top-0 left-0 w-full rotate-180"
        viewBox="0 0 1440 200"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="topWaveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ccfbf1" stopOpacity="0.2" />
            <stop offset="50%" stopColor="#e0f2fe" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#ccfbf1" stopOpacity="0.2" />
          </linearGradient>
        </defs>
        <path
          style={{
            animation: 'wave1 18s ease-in-out infinite',
          }}
          d="M0,100 C360,150 720,50 1080,100 C1260,125 1350,75 1440,100 L1440,0 L0,0 Z"
          fill="url(#topWaveGradient)"
        />
      </svg>

      <style>{`
        @keyframes wave1 {
          0%, 100% {
            d: path("M0,200 C240,150 480,250 720,200 C960,150 1200,250 1440,200 L1440,400 L0,400 Z");
          }
          50% {
            d: path("M0,200 C240,250 480,150 720,200 C960,250 1200,150 1440,200 L1440,400 L0,400 Z");
          }
        }
        
        @keyframes wave2 {
          0%, 100% {
            d: path("M0,250 C360,200 720,300 1080,250 C1260,225 1350,275 1440,250 L1440,400 L0,400 Z");
          }
          50% {
            d: path("M0,250 C360,300 720,200 1080,250 C1260,275 1350,225 1440,250 L1440,400 L0,400 Z");
          }
        }
        
        @keyframes wave3 {
          0%, 100% {
            d: path("M0,300 C180,280 360,320 540,300 C720,280 900,320 1080,300 C1260,280 1350,320 1440,300 L1440,400 L0,400 Z");
          }
          50% {
            d: path("M0,300 C180,320 360,280 540,300 C720,320 900,280 1080,300 C1260,320 1350,280 1440,300 L1440,400 L0,400 Z");
          }
        }
      `}</style>
    </div>
  )
}

export default WaveBackground
