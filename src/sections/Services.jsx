import { motion } from 'framer-motion'
const MotionUl = motion.ul
import ServiceCard from '../components/ServiceCard'

const services = [
  'Psychology (Counselling)',
  'Counselling (Trauma)',
  'Individual Therapy',
  'Spiritual Intelligence–Based Intervention',
]

export default function Services() {
  return (
  <section id="services" className="py-20 section-bg">
      <div className="container-edge">
        <h2 className="section-title">Services</h2>
        <div className="relative mt-10">
          {/* Subtle smooth background to highlight the cards */}
          <motion.div
            aria-hidden
            className="services-smooth-bg -z-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          />

          <MotionUl
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.08 } },
            }}
            className="relative grid gap-6 md:grid-cols-2 enhanced-list"
          >
            {services.map((s) => (
              <ServiceCard key={s} title={s} />
            ))}
          </MotionUl>
        </div>
      </div>
    </section>
  )
}
