const links = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#publications', label: 'Research & Publications' },
  { href: '#skills', label: 'Skills & Languages' },
  { href: '#scope', label: 'Scope of Practice' },
  { href: '#contact', label: 'Contact' },
]

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white mt-16" role="contentinfo">
      <div className="container-edge py-10 grid md:grid-cols-3 gap-8">
        <div>
          <div
            className="text-xl mb-2"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Stiliya Jos K
          </div>
          <p className="text-sm text-slate-600">
            Counselling Psychologist &amp; Ph.D. Research Scholar
          </p>
        </div>

        <nav aria-label="Quick links">
          <ul className="grid sm:grid-cols-2 gap-2 text-sm">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  className="hover:underline underline-offset-4"
                  href={l.href}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="text-sm">
          <div>
            Email:{' '}
            <a
              href="mailto:stiliyaj@gmail.com"
              className="hover:underline underline-offset-4"
            >
              stiliyaj@gmail.com
            </a>
          </div>
          <div>
            Phone:{' '}
            <a
              href="tel:8095355706"
              className="hover:underline underline-offset-4"
            >
              +91 8095355706
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-200">
        <div className="container-edge py-4 flex items-center justify-between text-xs text-slate-600">
          <span>© 2025 Stiliya Jos K</span>
          <span className="flex items-center gap-1">
            <img
              src="/logo.png"
              alt="Expressive AI logo"
              className="w-4 h-4"
            />
            Built with Expressive AI
          </span>
        </div>
      </div>
    </footer>
  )
}
