export default function Tokenomics() {
  const rows = [
    { label: 'Presale', value: '40%' },
    { label: 'Liquidity', value: '25%' },
    { label: 'Team & Advisors (Vested)', value: '15%' },
    { label: 'Ecosystem & Rewards', value: '15%' },
    { label: 'Treasury', value: '5%' },
  ]

  return (
    <section id="tokenomics" className="bg-black text-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-bold">Tokenomics</h2>
        <p className="mt-3 text-white/70 max-w-prose">Balanced allocations built for long-term sustainability and community incentives. Transparent vesting for internal stakeholders.</p>

        <div className="mt-8 grid md:grid-cols-2 gap-6">
          <div className="p-6 rounded-2xl bg-white/5 ring-1 ring-white/10">
            <ul className="divide-y divide-white/10">
              {rows.map((r) => (
                <li key={r.label} className="flex items-center justify-between py-3">
                  <span className="text-white/80">{r.label}</span>
                  <span className="font-semibold">{r.value}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="p-6 rounded-2xl bg-gradient-to-br from-cyan-500/10 via-fuchsia-500/10 to-violet-500/10 ring-1 ring-white/10">
            <h3 className="font-semibold">Highlights</h3>
            <ul className="mt-3 list-disc list-inside text-white/80 space-y-1">
              <li>Initial liquidity locked</li>
              <li>Team tokens vested over 24 months</li>
              <li>Rewards program for holders</li>
              <li>Cross-chain expansion plan</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
