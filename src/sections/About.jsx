import { motion } from 'framer-motion'
const MotionArticle = motion.article
const MotionAside = motion.aside
const MotionOl = motion.ol
const MotionLi = motion.li

const education = [
  { title: 'Ph.D. Scholar in Psychology', place: 'Christ University, Bengaluru, Karnataka', years: '2020 – 2025' },
  { title: 'M.Sc. Psychological Counselling', place: 'Indian Institute for Psychological Research & Bharathiar University, Coimbatore, Tamil Nadu', years: '2018 – 2019' },
  { title: 'B.A. Psychology, English Literature & Sociology', place: 'Jyoti Nivas College Autonomous, Bengaluru, Karnataka', years: '2015 – 2017' },
  { title: '12th Class', place: 'Jyoti Nivas College Autonomous, Bengaluru, Karnataka', years: '2011 – 2012' },
  { title: '10th Class', place: 'CJMAHSS Varandarappilly, Kerala Board', years: '2007' },
]

export default function About() {
  return (
  <section id="about" className="relative py-20 section-bg">
      <div aria-hidden className="absolute inset-x-0 -top-8 h-8 subtle-separator" />
      <div className="container-edge grid md:grid-cols-2 gap-12">
  <MotionArticle
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="max-w-prose"
        >
          <h2 className="section-title">About</h2>
          <p className="mt-6 text-slate-700">
            Every person has the ability to grow and succeed and my goal is to help people through that process. I am known for providing compassionate, client-centered care to individuals who are seeking self-development, healing, and emotional wellness.
          </p>
  </MotionArticle>

        <MotionAside
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h3 className="text-xl font-semibold">Education</h3>
          <MotionOl initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{visible:{transition:{staggerChildren:0.05}}}} className="mt-4 border-l-2 border-slate-200 pl-6 space-y-5">
            {education.map((e) => (
              <MotionLi variants={{hidden:{opacity:0,y:8},visible:{opacity:1,y:0}}} key={e.title} className="relative">
                <span className="absolute -left-[17px] top-1.5 w-3 h-3" style={{ backgroundColor: 'var(--color-accent)' }}></span>
                <div className="font-medium">{e.title}</div>
                <div className="text-sm text-slate-600">{e.place}</div>
                <div className="text-xs text-slate-500">{e.years}</div>
              </MotionLi>
            ))}
          </MotionOl>
        </MotionAside>
      </div>
    </section>
  )
}
