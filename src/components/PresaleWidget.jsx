import { useEffect, useMemo, useState } from 'react'

export default function PresaleWidget() {
  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
  const [presales, setPresales] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch(`${baseUrl}/api/presales`)
        if (!res.ok) throw new Error('Failed to load presales')
        const data = await res.json()
        setPresales(data)
      } catch (e) {
        setError(e.message)
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [baseUrl])

  return (
    <section id="presale" className="relative bg-black text-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold">Presale is live</h2>
            <p className="mt-3 text-white/70 max-w-prose">Purchase tokens at the opening price. Funds are secured with transparent on-chain mechanics and clear vesting.</p>

            <div className="mt-8 p-6 rounded-2xl bg-white/5 ring-1 ring-white/10">
              {loading ? (
                <p className="text-white/70">Loading presale details...</p>
              ) : error ? (
                <p className="text-red-400">{error}</p>
              ) : presales.length === 0 ? (
                <p className="text-white/70">No presales created yet. Using demo values.</p>
              ) : (
                <ul className="space-y-3">
                  {presales.map(p => (
                    <li key={p.id} className="flex items-center justify-between bg-black/30 rounded-xl px-4 py-3 ring-1 ring-white/10">
                      <div>
                        <p className="font-semibold">{p.name} • {p.symbol}</p>
                        <p className="text-sm text-white/60">${p.price_usd.toFixed(4)} per token</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-white/60">Soft/Hard Cap</p>
                        <p className="font-semibold">${p.soft_cap_usd.toLocaleString()} / ${p.hard_cap_usd.toLocaleString()}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>

          <BuyCard />
        </div>
      </div>
    </section>
  )
}

function BuyCard() {
  const [amount, setAmount] = useState('')
  const [status, setStatus] = useState('')

  const handleBuy = () => {
    setStatus('Demo only: connect wallet to proceed.')
  }

  return (
    <div className="p-6 rounded-2xl bg-gradient-to-br from-fuchsia-500/10 via-cyan-500/10 to-violet-500/10 ring-1 ring-white/10">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-semibold">Buy Tokens</h3>
        <span className="text-xs text-white/60">KYC-Free</span>
      </div>
      <div className="mt-4">
        <label className="text-sm text-white/70">Amount in USD</label>
        <input value={amount} onChange={(e)=>setAmount(e.target.value)} placeholder="100" className="mt-2 w-full bg-white/5 rounded-xl px-4 py-3 outline-none ring-1 ring-white/10 focus:ring-white/20" />
      </div>
      <button onClick={handleBuy} className="mt-5 w-full rounded-xl px-4 py-3 bg-gradient-to-r from-cyan-500 via-fuchsia-500 to-violet-600 font-medium shadow-lg shadow-fuchsia-500/30">Buy Now</button>
      {status && <p className="mt-3 text-sm text-white/70">{status}</p>}
      <p className="mt-6 text-xs text-white/50">For security, purchases are routed through audited smart contracts. This demo does not connect wallets.</p>
    </div>
  )
}
