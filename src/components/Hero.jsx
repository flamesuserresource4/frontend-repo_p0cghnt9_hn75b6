import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full bg-black text-white overflow-hidden" id="home">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/44zrIZf-iQZhbQNQ/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-40 pb-24">
        <div className="max-w-3xl">
          <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 text-white/80 text-xs ring-1 ring-white/10 backdrop-blur">
            Holographic Crypto Presale
          </span>
          <h1 className="mt-6 text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight">
            The most dynamic presale experience for the next-gen token
          </h1>
          <p className="mt-4 text-white/80 text-lg">
            Secure, transparent, and built for community. Join the whitelist and be early to our holo-themed presale with anime-grade motion.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#presale" className="inline-flex justify-center px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500 via-fuchsia-500 to-violet-600 font-medium shadow-lg shadow-fuchsia-500/30">
              Enter Presale
            </a>
            <a href="#about" className="inline-flex justify-center px-6 py-3 rounded-full bg-white/10 ring-1 ring-white/15 hover:bg-white/15 transition">
              Learn More
            </a>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(168,85,247,0.08),transparent_60%)]" />
    </section>
  )
}
