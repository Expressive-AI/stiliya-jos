import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
const MotionUl = motion.ul

const publications = [
  {
    type: 'Publications',
    items: [
      (
        <>
          <span className="authors">Stiliya, J. K., Antony, J. M., & Joseph, J. (2024).</span>{' '}
          <em className="title">Spiritual Intelligence and Spiritual Care in Nursing Practice: A Bibliometric Review</em>.{' '}
          <em className="journal">Indian Journal of Palliative Care</em>, 30(4), 304.
        </>
      ),
      (
        <>
          <span className="authors">Stiliya Jos K. & Antony, J. M. (2024).</span>{' '}
          <em className="title">The Development of a Spiritual Intelligence–Based Intervention for Nursing Students: A Research and Innovation Patent</em>.{' '}
          Patent Application No. 202441051229.
        </>
      ),
      (
        <>
          <span className="authors">Stiliya, J. K. (2024).</span>{' '}
          <em className="title">The Influence of Mental Health Practices on Spiritual Intelligence Among Baccalaureate Nursing Students During the Covid-19 Pandemic</em>.{' '}
          In <em className="journal">Indigenous Emerging Trends in Positive Psychology</em>.
        </>
      ),
      (
        <>
          <span className="authors">Stiliya, K. J., & Pandey, N. (2022).</span>{' '}
          <em className="title">Influence of Spiritual Intelligence on Happiness and Well-Being: A Review</em>.{' '}
          <em className="journal">Mind and Society</em>, 11(02), 121–128.
        </>
      ),
    ],
  },
  {
    type: 'Conference Presentations',
    items: [
      (
        <>
          <span className="authors">Antony, J. M., & Jos, K. S. (2022).</span>{' '}
          <em className="title">Influence of Spiritual Intelligence during COVID-19 Pandemic</em>.{' '}
          <span className="journal">MANODARPAN 2022.</span>
        </>
      ),
      (
        <>
          <span className="authors">Stiliya, J. K. (2022).</span>{' '}
          <em className="title">Mental Health Practices and Spiritual Intelligence Among Nurses in Kerala Using Bibliometric Analysis</em>.{' '}
          <span className="journal">International Conference on Mental Health & COVID-19.</span>
        </>
      ),
      (
        <>
          <span className="authors">Antony, J. M., & Jos, K. S. (2025).</span>{' '}
          <em className="title">Effectiveness of Spiritual Intelligence–Based Intervention on Nursing Students’ Mental Health</em>.{' '}
          <span className="journal">122nd Annual National Conference of Indian Psychiatric Society (Psychotherapeutics).</span>
        </>
      ),
    ],
  },
]

export default function Publications() {
  const [tab, setTab] = useState(0)

  return (
  <section id="publications" className="py-20 section-bg">
      <div className="container-edge">
        <h2 className="section-title">Research & Publications</h2>
        <div className="mt-6 flex gap-2">
          {publications.map((p, i) => (
            <button
              key={p.type}
              className="px-4 py-2 border border-slate-300 bg-white"
              style={tab === i ? { backgroundColor: 'color-mix(in oklab, var(--color-accent) 20%, white)' , borderColor: 'var(--color-accent)' } : {}}
              onClick={() => setTab(i)}
            >
              {p.type}
            </button>
          ))}
        </div>

        <div className="mt-8">
          <AnimatePresence mode="wait">
            <MotionUl
              key={tab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="pub-list grid gap-4"
            >
              {publications[tab].items.map((t, idx) => (
                <li key={idx} className="card pub-item text-sm leading-relaxed">{t}</li>
              ))}
            </MotionUl>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
