import { motion } from 'framer-motion'

const dotVariants = {
  initial: { opacity: 0.3, scale: 0.8 },
  animate: {
    opacity: [0.3, 1, 0.3],
    scale: [0.8, 1, 0.8],
    y: [0, -2, 0]
  },
}

const TypingDots = () => {
  return (
    <div className="flex items-center gap-1">
      {[0, 1, 2].map((i) => (
        <motion.span
          key={i}
          className="w-2 h-2 rounded-full bg-black-3"
          variants={dotVariants}
          initial="initial"
          animate="animate"
          transition={{
            duration: 1.2,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: i * 0.2,
          }}
        />
      ))}
    </div>
  )
}

export default TypingDots
