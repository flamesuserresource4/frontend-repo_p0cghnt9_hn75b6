import Navbar from './components/Navbar'
import Hero from './components/Hero'
import PresaleWidget from './components/PresaleWidget'
import Tokenomics from './components/Tokenomics'
import Whitelist from './components/Whitelist'
import AnimeCharacter from './components/AnimeCharacter'

function App() {
  return (
    <div className="bg-black min-h-screen text-white">
      <Navbar />
      <main>
        <Hero />
        <AnimeCharacter />
        <PresaleWidget />
        <Tokenomics />
        <Whitelist />
        <footer className="bg-black border-t border-white/10 py-10">
          <div className="max-w-7xl mx-auto px-6 text-white/60 text-sm flex flex-col sm:flex-row items-center justify-between gap-4">
            <p>© {new Date().getFullYear()} HoloCoin. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <a href="#about" className="hover:text-white">About</a>
              <a href="#tokenomics" className="hover:text-white">Tokenomics</a>
              <a href="#whitelist" className="hover:text-white">Whitelist</a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  )
}

export default App
