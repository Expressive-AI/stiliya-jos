import { motion } from 'framer-motion'
import GradientBlobUrl from '../assets/gradient-blob.svg'
import WavePatternUrl from '../assets/wave-pattern.svg'
import DotsPatternUrl from '../assets/dots-pattern.svg'

export default function Hero() {
  const MotionDiv = motion.div

  return (
    <section id="home" aria-label="Hero" className="relative overflow-hidden bg-white section-bg">
      {/* Cinematic letterbox bars */}
      <div aria-hidden className="absolute inset-x-0 top-0 h-12 bg-gradient-to-b from-black/20 to-transparent" />
      <div aria-hidden className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-black/25 to-transparent" />

      {/* Decorative SVG Patterns */}
      <div className="absolute -top-20 -left-20 w-80 opacity-30">
        <img src={GradientBlobUrl} alt="" aria-hidden="true" className="w-full h-full" />
      </div>
      <div className="absolute -bottom-16 right-0 w-96 opacity-20">
        <img src={WavePatternUrl} alt="" aria-hidden="true" className="w-full h-full" />
      </div>
      <div className="absolute top-1/2 left-10 w-40 opacity-10 -translate-y-1/2">
        <img src={DotsPatternUrl} alt="" aria-hidden="true" className="w-full h-full" />
      </div>

      {/* Monochrome line-art background (retained) */}
      <div className="absolute inset-0 pointer-events-none">
        <svg
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          viewBox="0 0 800 600"
        >
          <g fill="none" stroke="#1F2937" strokeWidth="0.8" opacity="0.34">
            <path d="M0,320 C200,260 600,380 800,320" />
            <path d="M0,360 C220,300 580,420 800,360" />
          </g>
          <g fill="none" stroke="#1F2937" strokeWidth="0.6" strokeDasharray="2 6" opacity="0.26">
            <circle cx="140" cy="110" r="58" />
            <circle cx="660" cy="470" r="92" />
          </g>
          <g fill="none" stroke="#1F2937" strokeWidth="0.5" opacity="0.22">
            <path d="M120,520 C220,480 320,520 420,500" />
            <path d="M420,120 C520,100 620,140 720,110" />
          </g>
        </svg>
      </div>

      <div className="container-edge min-h-[92dvh] grid md:grid-cols-2 items-center gap-12 py-12">
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="order-2 md:order-1 z-10"
        >
          <h1 className="name-display relative inline-block whitespace-nowrap leading-tight tracking-tight text-xl sm:text-3xl md:text-4xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Stiliya Jos K
          </h1>
          <p className="mt-3 text-lg text-slate-800">
            Counselling Psychologist & Ph.D. Research Scholar
          </p>
          <p className="mt-6 max-w-prose text-slate-700">
            Every person has the ability to grow and succeed. I provide compassionate,
            client-centered care to support self-development, healing, and emotional wellness.
          </p>
          <div className="mt-8">
            <a className="btn relative inline-flex items-center overflow-hidden" href="#about">
              <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-600 opacity-75 blur-md transition-all duration-300 group-hover:opacity-100 group-hover:blur-lg" />
              <span className="relative z-10 text-white">Learn More</span>
            </a>
          </div>
        </MotionDiv>

        <MotionDiv
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="relative order-1 md:order-2 flex justify-center z-10"
        >
          {/* Floating geometric accent */}
          <div
            aria-hidden
            className="absolute -right-10 -top-10 w-24 h-24 rotate-45"
            style={{ backgroundColor: '#f3f4f6', opacity: 0.4 }}
          />

          {/* Soft mono halo behind portrait */}
          <div
            aria-hidden
            className="absolute -z-10 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[24rem] h-[24rem] rounded-full"
            style={{
              background: 'radial-gradient(circle, rgba(0,0,0,0.08) 0%, rgba(0,0,0,0.04) 45%, rgba(255,255,255,0) 70%)',
              filter: 'blur(4px)',
            }}
          />

          {/* Portrait container */}
          <div
            className="w-72 h-72 md:w-96 md:h-96 bg-white border border-slate-200 overflow-hidden grid place-items-center"
            style={{ boxShadow: '0 20px 60px rgba(0,0,0,0.12)' }}
          >
            <img
              src="/stiliyia-jos.jpg"
              alt="Portrait of Stiliya Jos K"
              className="w-full h-full object-cover"
              loading="eager"
              decoding="async"
            />
          </div>
        </MotionDiv>
      </div>

      {/* Bottom wave SVG mask */}
      <div className="absolute bottom-0 w-full">
        <svg viewBox="0 0 1440 100" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="#ffffff"
            d="M0,32L60,42.7C120,53,240,75,360,90.7C480,107,600,117,720,112C840,107,960,85,1080,80C1200,75,1320,85,1380,90.7L1440,96L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
          />
        </svg>
      </div>
    </section>
  )
}
