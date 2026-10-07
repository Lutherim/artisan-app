'use client'

import { useMemo, useState } from 'react'
import { Search, SlidersHorizontal, MapPin } from 'lucide-react'
import { artisans } from '@/data/artisans'
import { trades } from '@/data/trades'
import { ArtisanCard } from './ArtisanCard'

export function ArtisanDirectory({ initialFilters }: { initialFilters: { trade?: string; location?: string; q?: string } }) {
  const initial = useMemo(() => ({trade: initialFilters.trade ?? '', location: initialFilters.location ?? '', q: initialFilters.q ?? ''}), [initialFilters.trade, initialFilters.location, initialFilters.q])
  const [filters, setFilters] = useState(initial)
  const filtered = useMemo(() => artisans.filter(a => {
    const tradeOk = !filters.trade || a.trade === filters.trade
    const location = filters.location.toLowerCase()
    const locationOk = !location || `${a.city} ${a.serviceArea}`.toLowerCase().includes(location)
    const q = filters.q.toLowerCase()
    const qOk = !q || `${a.name} ${a.businessName} ${a.shortBio} ${a.specialties.join(' ')}`.toLowerCase().includes(q)
    return tradeOk && locationOk && qOk
  }), [filters])
  return <main className="min-h-screen bg-stone-50"><section className="border-b border-stone-200 bg-white"><div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8"><p className="text-sm font-semibold uppercase tracking-widest text-amber-700">Directory</p><h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">Find a local artisan</h1><p className="mt-2 max-w-2xl text-stone-600">Compare vetted professionals by trade, area, experience and reviews.</p><div className="mt-7 grid gap-2 md:grid-cols-[1.2fr_1fr_1fr]"><label className="flex h-12 items-center rounded-xl border border-stone-200 bg-white px-4"><Search size={18} className="mr-2 text-stone-400"/><input value={filters.q} onChange={e=>setFilters({...filters,q:e.target.value})} placeholder="Search by name, service or skill" className="w-full text-sm outline-none"/></label><label className="flex h-12 items-center rounded-xl border border-stone-200 bg-white px-4"><MapPin size={18} className="mr-2 text-stone-400"/><input value={filters.location} onChange={e=>setFilters({...filters,location:e.target.value})} placeholder="City or area" className="w-full text-sm outline-none"/></label><select value={filters.trade} onChange={e=>setFilters({...filters,trade:e.target.value})} className="h-12 rounded-xl border border-stone-200 bg-white px-4 text-sm"><option value="">All trades</option>{trades.map(t=><option key={t.slug} value={t.slug}>{t.label}</option>)}</select></div></div></section><section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8"><div className="mb-6 flex items-center justify-between"><p className="text-sm text-stone-600"><span className="font-semibold text-slate-900">{filtered.length}</span> artisans found</p><div className="flex items-center gap-2 text-sm text-stone-500"><SlidersHorizontal size={16}/> Sorted by rating</div></div>{filtered.length ? <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">{filtered.map(a=><ArtisanCard key={a.id} artisan={a}/>)}</div> : <div className="rounded-xl border border-dashed border-stone-300 bg-white p-12 text-center"><h2 className="font-semibold text-slate-900">No artisans match those filters</h2><p className="mt-2 text-sm text-stone-600">Try a broader location, trade or search term.</p></div>}</section></main>
}
