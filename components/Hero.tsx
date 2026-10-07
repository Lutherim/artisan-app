'use client'

import { useMemo, useState } from 'react'
import Link from 'next/link'
import { MapPin, Search, Wrench, Hammer, Zap, Paintbrush, Ruler, ShieldCheck } from 'lucide-react'
import { trades } from '@/data/trades'

const icons = { plumbing: Wrench, roofing: ShieldCheck, carpentry: Hammer, paving: Ruler, electrical: Zap, painting: Paintbrush }

export function Hero() {
  const [trade, setTrade] = useState('')
  const [location, setLocation] = useState('')
  const [term, setTerm] = useState('')
  const href = useMemo(() => {
    const params = new URLSearchParams()
    if (trade) params.set('trade', trade)
    if (location) params.set('location', location)
    if (term) params.set('q', term)
    const query = params.toString()
    return `/artisans${query ? `?${query}` : ''}`
  }, [trade, location, term])
  return <section className="relative overflow-hidden bg-slate-900 text-white">
    <div className="absolute inset-0 opacity-20"><img src="/images/hero.png" alt="" className="h-full w-full object-cover" /></div>
    <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-20 lg:px-8">
      <div className="max-w-3xl">
        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-sm text-stone-200"><ShieldCheck size={16} className="text-amber-400"/> Vetted local professionals</div>
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">Trusted Local Artisans for Your Home &amp; Business</h1>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-stone-300">Find vetted plumbers, carpenters, roofers, and pavers in your area. Compare experience, reviews, portfolios and availability before you hire.</p>
        <div className="mt-8 rounded-2xl bg-white p-2 shadow-2xl">
          <div className="grid gap-2 md:grid-cols-[1.1fr_1fr_1fr_auto]">
            <input value={term} onChange={e => setTerm(e.target.value)} placeholder="What do you need?" className="h-12 rounded-xl px-4 text-sm text-slate-900 outline-none ring-0 placeholder:text-stone-400" />
            <select value={trade} onChange={e => setTrade(e.target.value)} className="h-12 rounded-xl border border-stone-200 bg-white px-4 text-sm text-slate-900 outline-none"><option value="">All trades</option>{trades.map(t => <option key={t.slug} value={t.slug}>{t.label}</option>)}</select>
            <div className="flex h-12 items-center rounded-xl border border-stone-200 px-4"><MapPin size={18} className="mr-2 text-stone-400"/><input value={location} onChange={e => setLocation(e.target.value)} placeholder="City or area" className="min-w-0 flex-1 text-sm text-slate-900 outline-none placeholder:text-stone-400" /></div>
            <Link href={href} className="flex h-12 items-center justify-center gap-2 rounded-xl bg-amber-600 px-6 font-semibold text-white transition hover:bg-amber-700"><Search size={18}/> Search</Link>
          </div>
        </div>
        <div className="mt-6 flex flex-wrap gap-2">
          {trades.slice(0,5).map(t => { const Icon = icons[t.slug]; return <Link key={t.slug} href={`/artisans?trade=${t.slug}`} className="flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3.5 py-2 text-sm text-stone-200 transition hover:bg-white/15 hover:text-white"><Icon size={15}/>{t.label}</Link> })}
        </div>
      </div>
    </div>
  </section>
}
