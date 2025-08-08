import { useState } from 'react'

const navItems = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#publications', label: 'Research & Publications' },
  { href: '#skills', label: 'Skills & Languages' },
  { href: '#scope', label: 'Scope of Practice' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header
      className="fixed top-0 inset-x-0 z-50 backdrop-blur border-b border-slate-200"
      style={{ backgroundColor: 'rgba(247, 249, 250, 0.9)' }}
    >
      <nav
        aria-label="Primary"
        className="container-edge h-16 flex items-center justify-between"
      >
        <a
          href="#home"
          className="text-xl md:text-2xl tracking-tight"
          style={{ fontFamily: 'Playfair Display, serif' }}
        >
          Stiliya Jos K
        </a>

        <button
          className="md:hidden inline-flex items-center justify-center w-11 h-11 border border-slate-300 bg-white rounded-none"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menu</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path
              fillRule="evenodd"
              d="M3.75 5.25a.75.75 0 0 1 .75-.75h15a.75.75 0 0 1 0 1.5h-15a.75.75 0 0 1-.75-.75Zm0 6a.75.75 0 0 1 .75-.75h15a.75.75 0 0 1 0 1.5h-15a.75.75 0 0 1-.75-.75Zm.75 5.25a.75.75 0 0 0 0 1.5h15a.75.75 0 0 0 0-1.5h-15Z"
              clipRule="evenodd"
            />
          </svg>
        </button>

        <ul className="hidden md:flex items-center gap-6 text-sm">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                className="hover:underline underline-offset-4 decoration-accent"
                href={item.href}
              >
                {item.label}
              </a>
            </li>
          ))}
          <li className="flex items-center gap-1">
            <img
              src="/logo.png"
              alt="Expressive AI logo"
              className="w-5 h-5"
            />
            <span className="text-xs text-slate-600">Built with Expressive AI</span>
          </li>
        </ul>
      </nav>

      <div
        id="mobile-menu"
        className={`${open ? 'block' : 'hidden'} md:hidden border-t border-slate-200 bg-white`}
      >
        <ul className="container-edge py-3 grid gap-2">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                className="block py-2 hover:underline underline-offset-4 decoration-accent"
                href={item.href}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            </li>
          ))}
          <li className="flex items-center gap-2 px-2">
            <img
              src="/logo.png"
              alt="Expressive AI logo"
              className="w-5 h-5"
            />
            <span className="text-sm text-slate-600">
              Built with Expressive AI
            </span>
          </li>
        </ul>
      </div>
    </header>
  )
}
