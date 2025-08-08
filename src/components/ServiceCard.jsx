import { motion } from 'framer-motion'
const MotionLi = motion.li

export default function ServiceCard({ title }) {
  return (
    <MotionLi
      variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } }}
      whileHover={{ y: -4 }}
      whileFocus={{ y: -2 }}
      className="card enhanced-item group relative overflow-hidden"
    >
      {/* Accent dot */}
      <span className="absolute -left-1 -top-1 h-5 w-5 rounded-full bg-[var(--color-accent)] opacity-80 blur-[1px]"></span>

      {/* Soft gradient edge on hover */}
      <span className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            'radial-gradient(60% 50% at 50% 0%, rgba(79, 209, 197, 0.10) 0%, rgba(79, 209, 197, 0.00) 60%)',
        }}
      />

      <div className="relative z-10 flex items-start gap-3">
        <span className="mt-1 inline-flex h-2.5 w-2.5 shrink-0 rounded-full bg-[var(--color-accent)] shadow-[0_0_0_3px_rgba(79,209,197,0.15)]"></span>
        <div className="text-lg font-medium leading-snug">
          {title}
        </div>
      </div>
    </MotionLi>
  )
}
