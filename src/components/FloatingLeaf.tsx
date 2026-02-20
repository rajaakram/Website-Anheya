import { Leaf } from 'lucide-react'

interface FloatingLeafProps {
  className?: string
  delay?: string
  size?: 'sm' | 'md' | 'lg'
}

const sizeMap = {
  sm: 'w-4 h-4',
  md: 'w-6 h-6',
  lg: 'w-8 h-8',
}

const FloatingLeaf = ({ className = '', delay = '0s', size = 'md' }: FloatingLeafProps) => {
  return (
    <div
      className={`
        absolute ${className}
        animate-float-slow
        opacity-60
      `}
      style={{
        animationDelay: delay,
      }}
    >
      <Leaf 
        className={`
          ${sizeMap[size]} 
          text-teal-500/70
          animate-sway
        `}
        strokeWidth={1}
        style={{
          animationDelay: `${parseFloat(delay) + 1}s`,
        }}
      />
    </div>
  )
}

export default FloatingLeaf
