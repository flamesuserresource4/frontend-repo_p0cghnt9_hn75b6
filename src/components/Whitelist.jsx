import { useState } from 'react'

export default function Whitelist() {
  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
  const [email, setEmail] = useState('')
  const [wallet, setWallet] = useState('')
  const [network, setNetwork] = useState('ETH')
  const [status, setStatus] = useState('')
  const [loading, setLoading] = useState(false)

  const submit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setStatus('')
    try {
      const res = await fetch(`${baseUrl}/api/whitelist`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, wallet, network })
      })
      if (!res.ok) throw new Error('Submission failed')
      setStatus('Success! You are on the whitelist.')
      setEmail(''); setWallet('')
    } catch (e) {
      setStatus('Error: ' + e.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="whitelist" className="bg-black text-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold">Join the Whitelist</h2>
            <p className="mt-3 text-white/70 max-w-prose">Reserve your spot and get notified when each phase opens. Limited allocations per wallet.</p>
          </div>

          <form onSubmit={submit} className="p-6 rounded-2xl bg-white/5 ring-1 ring-white/10">
            <div>
              <label className="text-sm text-white/70">Email</label>
              <input required value={email} onChange={(e)=>setEmail(e.target.value)} type="email" className="mt-2 w-full bg-white/5 rounded-xl px-4 py-3 outline-none ring-1 ring-white/10 focus:ring-white/20" />
            </div>
            <div className="mt-4">
              <label className="text-sm text-white/70">Wallet Address</label>
              <input value={wallet} onChange={(e)=>setWallet(e.target.value)} placeholder="0x..." className="mt-2 w-full bg-white/5 rounded-xl px-4 py-3 outline-none ring-1 ring-white/10 focus:ring-white/20" />
            </div>
            <div className="mt-4">
              <label className="text-sm text-white/70">Network</label>
              <select value={network} onChange={(e)=>setNetwork(e.target.value)} className="mt-2 w-full bg-white/5 rounded-xl px-4 py-3 outline-none ring-1 ring-white/10 focus:ring-white/20">
                <option>ETH</option>
                <option>BSC</option>
                <option>POL</option>
              </select>
            </div>
            <button disabled={loading} className="mt-5 w-full rounded-xl px-4 py-3 bg-gradient-to-r from-cyan-500 via-fuchsia-500 to-violet-600 font-medium shadow-lg shadow-fuchsia-500/30 disabled:opacity-60">
              {loading ? 'Submitting...' : 'Join Whitelist'}
            </button>
            {status && <p className="mt-3 text-sm">{status}</p>}
          </form>
        </div>
      </div>
    </section>
  )
}
