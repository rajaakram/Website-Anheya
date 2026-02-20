const BreathingCircle = () => {
  return (
    <div className="relative">
      {/* Outer glow ring */}
      <div 
        className="absolute inset-0 rounded-full bg-gradient-to-br from-teal-200/30 to-sage-200/30 blur-2xl animate-breathe-slow"
        style={{
          width: '500px',
          height: '500px',
          transform: 'translate(-50%, -50%)',
          left: '50%',
          top: '50%',
        }}
      />
      
      {/* Middle ring */}
      <div 
        className="absolute rounded-full border border-teal-200/30 animate-breathe"
        style={{
          width: '400px',
          height: '400px',
          transform: 'translate(-50%, -50%)',
          left: '50%',
          top: '50%',
          animationDelay: '1s',
        }}
      />
      
      {/* Inner ring */}
      <div 
        className="absolute rounded-full border border-sage-200/40 animate-breathe-slow"
        style={{
          width: '300px',
          height: '300px',
          transform: 'translate(-50%, -50%)',
          left: '50%',
          top: '50%',
          animationDelay: '2s',
        }}
      />

      {/* Ripple rings */}
      {[...Array(3)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full border border-teal-300/20 animate-ripple"
          style={{
            width: `${350 + i * 50}px`,
            height: `${350 + i * 50}px`,
            transform: 'translate(-50%, -50%)',
            left: '50%',
            top: '50%',
            animationDelay: `${i * 1}s`,
          }}
        />
      ))}
    </div>
  )
}

export default BreathingCircle
