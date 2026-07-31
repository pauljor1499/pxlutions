import { useEffect, useRef } from 'react'
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion'

export default function StatCounter({ value, suffix = '', label }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const motionValue = useMotionValue(0)
  const spring = useSpring(motionValue, { damping: 24, stiffness: 60 })
  const nodeRef = useRef(null)

  useEffect(() => {
    if (inView) motionValue.set(value)
  }, [inView, value, motionValue])

  useEffect(() => {
    const unsubscribe = spring.on('change', (latest) => {
      if (nodeRef.current) {
        nodeRef.current.textContent = Math.round(latest).toString()
      }
    })
    return unsubscribe
  }, [spring])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="flex flex-col gap-1"
    >
      <div className="flex items-baseline gap-1 text-4xl font-semibold text-fg md:text-5xl">
        <span ref={nodeRef}>0</span>
        <span className="text-accent">{suffix}</span>
      </div>
      <p className="text-sm text-mist">{label}</p>
    </motion.div>
  )
}
