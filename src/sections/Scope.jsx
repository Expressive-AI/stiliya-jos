import { motion } from 'framer-motion'
const MotionUl = motion.ul
const MotionLi = motion.li

const issues = [
  'Attachment Issues',
  'Behavioural & Emotional Problems',
  'Depression',
  'Gender Identity Issues',
  'Relationship Counselling',
  'Self-Esteem',
  'Trauma',
  'Young Adult Issues',
]

const clients = [
  'Adults', 'Families', 'Adolescents', 'Children', 'Elderly', 'Individuals'
]

export default function Scope() {
  return (
  <section id="scope" className="py-20 section-bg">
      <div className="container-edge">
        <h2 className="section-title">Scope of Practice</h2>
        <div className="mt-10 grid md:grid-cols-2 gap-10 relative">
          {/* subtle section background accent */}
          <motion.div aria-hidden className="services-smooth-bg -z-10" initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once:true, amount:0.2}} transition={{duration:0.8}} />
          <div>
            <h3 className="text-xl font-semibold">Issues</h3>
            <MotionUl initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{visible:{transition:{staggerChildren:0.05}}}} className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 pub-list relative z-10">
              {issues.map((i) => (
                <MotionLi key={i} variants={{hidden:{opacity:0,y:10},visible:{opacity:1,y:0}}} className="card enhanced-item text-sm">{i}</MotionLi>
              ))}
            </MotionUl>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Clients</h3>
            <MotionUl initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{visible:{transition:{staggerChildren:0.05}}}} className="mt-4 grid grid-cols-2 sm:grid-cols-3 gap-3 pub-list relative z-10">
              {clients.map((c) => (
                <MotionLi key={c} variants={{hidden:{opacity:0,y:10},visible:{opacity:1,y:0}}} className="card enhanced-item text-sm text-center">{c}</MotionLi>
              ))}
            </MotionUl>
          </div>
        </div>
      </div>
    </section>
  )
}
