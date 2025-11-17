import { useState } from 'react'
import { Menu, X, Coins, Shield, Sparkles } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { href: '#about', label: 'About' },
    { href: '#presale', label: 'Presale' },
    { href: '#tokenomics', label: 'Tokenomics' },
    { href: '#whitelist', label: 'Whitelist' },
  ]

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/40 bg-black/50 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 text-white">
            <div className="h-8 w-8 rounded-md bg-gradient-to-br from-cyan-400 via-fuchsia-500 to-violet-600 flex items-center justify-center shadow-lg shadow-fuchsia-500/30">
              <Coins className="h-5 w-5 text-white" />
            </div>
            <span className="font-semibold tracking-tight">HoloCoin</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-sm text-white/80 hover:text-white transition-colors">
                {item.label}
              </a>
            ))}
            <a href="#presale" className="inline-flex items-center gap-2 text-sm px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500 via-fuchsia-500 to-violet-600 text-white shadow-lg shadow-cyan-500/20 hover:shadow-fuchsia-500/30 transition-all">
              <Shield className="h-4 w-4" />
              Buy Tokens
            </a>
          </nav>

          <button onClick={() => setOpen(!open)} className="md:hidden text-white">
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4 space-y-3">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="block text-white/80 hover:text-white">
                {item.label}
              </a>
            ))}
            <a href="#presale" className="inline-flex items-center gap-2 text-sm px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500 via-fuchsia-500 to-violet-600 text-white shadow-lg shadow-cyan-500/20">
              <Sparkles className="h-4 w-4" />
              Buy Tokens
            </a>
          </div>
        )}
      </div>
    </header>
  )
}
