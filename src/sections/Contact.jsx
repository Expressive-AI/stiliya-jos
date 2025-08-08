import { motion } from 'framer-motion'
const MotionSection = motion.section
const MotionDiv = motion.div

export default function Contact() {
  return (
  <MotionSection id="contact" className="py-20 relative overflow-hidden section-bg"
      initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
      aria-label="Contact details"
    >
      {/* Subtle background vector */}
      <div className="absolute inset-0 pointer-events-none opacity-25" aria-hidden="true">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" viewBox="0 0 800 400">
          <defs>
            <linearGradient id="contactGradient" x1="0" x2="1" y1="0" y2="1">
              <stop offset="0%" stopColor="#4FD1C5"/>
              <stop offset="100%" stopColor="#F6AD55"/>
            </linearGradient>
          </defs>
          <g fill="none" stroke="url(#contactGradient)" strokeWidth="0.9">
            <path d="M0,260 C200,210 600,310 800,260"/>
            <circle cx="120" cy="90" r="46"/>
            <circle cx="700" cy="320" r="60"/>
          </g>
        </svg>
      </div>

      <div className="container-edge relative">
        <h2 className="section-title">Contact</h2>
        <p className="mt-2 text-slate-700">Reach out directly via phone or email.</p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {/* Phone card */}
          <a href="tel:+91 8095355706" className="card group relative flex items-center gap-4" aria-label="Call 8095355706">
            <span className="inline-flex items-center justify-center w-14 h-14 border border-slate-200 bg-white" style={{ borderRadius: 0 }} aria-hidden>
              {/* Phone icon (simplified handset) */}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="var(--color-accent)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M4 5c0 8.284 6.716 15 15 15h0l-3.2-3.2c-.36-.36-.54-.54-.54-.86s.18-.5.54-.86l2.1-2.1c.72-.72 1.08-1.08 1.08-1.62s-.36-.9-1.08-1.62l-2-2c-.72-.72-1.08-1.08-1.62-1.08s-.9.36-1.62 1.08L11.9 8.3"/>
              </svg>
            </span>
            <div className="min-w-0">
              <div className="text-sm text-slate-600">Phone</div>
              <div className="text-lg font-medium group-hover:underline underline-offset-4">8095355706</div>
            </div>
          </a>

          {/* Email card */}
          <a href="mailto:stiliyaj@gmail.com" className="card group relative flex items-center gap-4" aria-label="Email stiliyaj@gmail.com">
            <span className="inline-flex items-center justify-center w-14 h-14 border border-slate-200 bg-white" style={{ borderRadius: 0 }} aria-hidden>
              {/* Email icon */}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="var(--color-accent)" strokeWidth="1.75" strokeLinecap="square" strokeLinejoin="miter">
                <rect x="3" y="5" width="18" height="14"/>
                <path d="M3 7l9 6 9-6"/>
              </svg>
            </span>
            <div className="min-w-0">
              <div className="text-sm text-slate-600">Email</div>
              <div className="text-lg font-medium truncate group-hover:underline underline-offset-4">stiliyaj@gmail.com</div>
            </div>
            {/* Decorative square aligned with the email card */}
            <span aria-hidden className="pointer-events-none absolute -z-10 -right-4 -bottom-4 w-16 h-16 md:w-20 md:h-20" style={{ backgroundColor: 'var(--color-highlight)', opacity: 0.2 }} />
          </a>
        </div>
        
      </div>
    </MotionSection>
  )
}
