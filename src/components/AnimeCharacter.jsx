import { Sparkles } from 'lucide-react'

// Anime-styled character showcase with neon outline and floating sakura petals
export default function AnimeCharacter() {
  const petals = Array.from({ length: 18 })

  return (
    <section id="about" className="relative bg-black text-white py-24 overflow-hidden">
      <style>{`
        @keyframes floatPetal {
          0% { transform: translateY(-10%) translateX(0) rotate(0deg); opacity: 0; }
          10% { opacity: 0.8; }
          50% { transform: translateY(50vh) translateX(-20px) rotate(60deg); }
          100% { transform: translateY(100vh) translateX(20px) rotate(120deg); opacity: 0; }
        }
        .petal {
          position: absolute; top: -10%; width: 14px; height: 10px;
          background: linear-gradient(180deg, rgba(255,192,203,0.95), rgba(255,105,180,0.7));
          border-radius: 60% 40% 60% 40% / 60% 40% 60% 40%;
          filter: drop-shadow(0 2px 8px rgba(255,105,180,0.35));
          animation: floatPetal linear infinite;
          opacity: 0.7;
        }
      `}</style>

      {/* Floating petals */}
      {petals.map((_, i) => (
        <span
          key={i}
          className="petal"
          style={{
            left: `${(i * 7) % 100}%`,
            animationDuration: `${12 + (i % 6)}s`,
            animationDelay: `${(i % 12) * 0.8}s`,
          }}
        />
      ))}

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white/80 text-xs ring-1 ring-white/10 backdrop-blur">
            <Sparkles className="h-3.5 w-3.5 text-pink-300" />
            Neon Anime Aesthetic
          </span>
          <h2 className="mt-5 text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
            ANIME JAPAN
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-fuchsia-500 to-violet-600">
              アニメ・ジャパン コレクション
            </span>
          </h2>
          <p className="mt-4 text-white/80 max-w-prose">
            A holographic, high-energy world inspired by Japanese anime openings. Smooth neon edges, floating petals, and micro-interactions bring your presale to life.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#presale" className="group inline-flex justify-center px-6 py-3 rounded-full bg-gradient-to-r from-pink-500 via-fuchsia-500 to-violet-600 font-medium shadow-lg shadow-pink-500/30 relative overflow-hidden">
              <span className="relative z-10">Start Buying</span>
              <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-[radial-gradient(120px_40px_at_var(--x,50%)_-20px,rgba(255,255,255,0.35),transparent_70%)]" />
            </a>
            <a href="#whitelist" className="inline-flex justify-center px-6 py-3 rounded-full bg-white/10 ring-1 ring-white/15 hover:bg-white/15 transition">
              Join Whitelist
            </a>
          </div>
        </div>

        {/* Neon character card */}
        <div className="relative">
          <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-pink-500/40 via-fuchsia-500/40 to-violet-600/40 blur-2xl" aria-hidden />
          <div className="relative rounded-3xl p-1 bg-gradient-to-br from-white/10 to-white/5 ring-1 ring-white/15">
            <div className="rounded-[22px] bg-black/60 p-8 ring-1 ring-white/10">
              <AnimeOutlineSVG />
              <div className="mt-6 grid grid-cols-3 gap-3 text-center text-xs text-white/70">
                <div className="rounded-xl bg-white/5 ring-1 ring-white/10 py-2">Shōnen Vibes</div>
                <div className="rounded-xl bg-white/5 ring-1 ring-white/10 py-2">Neon Edge</div>
                <div className="rounded-xl bg-white/5 ring-1 ring-white/10 py-2">Holo Glow</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function AnimeOutlineSVG() {
  // Stylized anime silhouette with neon stroke; abstract to avoid IP concerns
  return (
    <svg viewBox="0 0 400 360" className="w-full h-[320px]" role="img" aria-label="Anime character neon outline">
      <defs>
        <linearGradient id="g1" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#fb7185" />
          <stop offset="50%" stopColor="#d946ef" />
          <stop offset="100%" stopColor="#8b5cf6" />
        </linearGradient>
        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="3.5" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Head */}
      <path d="M140 120 C 160 80, 240 80, 260 120 C 280 150, 270 190, 250 210 C 230 230, 170 230, 150 210 C 130 190, 120 150, 140 120 Z" fill="none" stroke="url(#g1)" strokeWidth="3.5" filter="url(#glow)" />
      {/* Hair spikes */}
      <path d="M150 100 L140 80 L160 90 L155 70 L175 88 L180 66 L195 86 L210 64 L215 88 L235 70 L230 92 L250 80 L240 100" fill="none" stroke="url(#g1)" strokeWidth="3" filter="url(#glow)" />
      {/* Eyes */}
      <path d="M170 150 Q185 145 200 150" fill="none" stroke="#fff" opacity="0.9" />
      <path d="M205 150 Q220 145 235 150" fill="none" stroke="#fff" opacity="0.9" />
      {/* Collar / shoulders */}
      <path d="M150 215 C 140 240, 130 260, 120 280 L 280 280 C 270 260, 260 240, 250 215" fill="none" stroke="url(#g1)" strokeWidth="3" filter="url(#glow)" />
      {/* Body lines */}
      <path d="M140 280 L 135 310 C 170 320, 230 320, 265 310 L 260 280" fill="none" stroke="url(#g1)" strokeWidth="2.8" filter="url(#glow)" />
    </svg>
  )
}
