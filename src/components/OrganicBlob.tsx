interface OrganicBlobProps {
  className?: string
  color?: string
  animationDelay?: string
}

const OrganicBlob = ({ className = '', color = 'from-teal-200/60 to-teal-300/40', animationDelay = '0s' }: OrganicBlobProps) => {
  return (
    <div
      className={`
        absolute rounded-full blur-3xl
        bg-gradient-to-br ${color}
        animate-breathe
        ${className}
      `}
      style={{
        animationDelay,
        borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
      }}
    />
  )
}

export default OrganicBlob
