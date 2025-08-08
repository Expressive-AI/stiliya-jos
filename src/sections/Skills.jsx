import { motion } from 'framer-motion'
const MotionDiv = motion.div
const MotionUl = motion.ul
const MotionLi = motion.li

export default function Skills() {
  return (
  <section id="skills" className="py-20 section-bg">
      <div className="container-edge">
        <h2 className="section-title">Skills & Languages</h2>
        <div className="mt-8 grid md:grid-cols-2 gap-8 relative">
          {/* subtle section background accent */}
          <motion.div aria-hidden className="services-smooth-bg -z-10" initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once:true, amount:0.2}} transition={{duration:0.8}} />
          <MotionDiv initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }}>
            <h3 className="text-xl font-semibold">Skills</h3>
            <MotionUl initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{visible:{transition:{staggerChildren:0.05}}}} className="mt-4 grid gap-3 pub-list">
              <MotionLi variants={{hidden:{opacity:0,y:8},visible:{opacity:1,y:0}}} className="card enhanced-item">APA-style academic writing & formal communication</MotionLi>
              <MotionLi variants={{hidden:{opacity:0,y:8},visible:{opacity:1,y:0}}} className="card enhanced-item">Creating safe, judgment-free therapeutic spaces</MotionLi>
            </MotionUl>
          </MotionDiv>

          <MotionDiv initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.1 }}>
            <h3 className="text-xl font-semibold">Languages</h3>
            <MotionUl initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{visible:{transition:{staggerChildren:0.05}}}} className="mt-4 grid gap-3 pub-list">
              <MotionLi variants={{hidden:{opacity:0,y:8},visible:{opacity:1,y:0}}} className="card enhanced-item">English (Fluent)</MotionLi>
              <MotionLi variants={{hidden:{opacity:0,y:8},visible:{opacity:1,y:0}}} className="card enhanced-item">Malayalam (Fluent)</MotionLi>
            </MotionUl>
          </MotionDiv>
        </div>
      </div>
    </section>
  )
}
