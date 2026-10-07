import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { artisans } from '@/data/artisans'
import { ArtisanCard } from './ArtisanCard'

export function FeaturedArtisans() {
  const featured = [...artisans].sort((a,b) => b.rating - a.rating || b.reviewCount - a.reviewCount).slice(0,3)
  return <section id="artisans" className="bg-white py-16 md:py-20"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div className="mb-10 flex items-end justify-between gap-4"><div><p className="text-sm font-semibold uppercase tracking-widest text-amber-700">Top rated</p><h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">Artisans people trust</h2><p className="mt-2 text-stone-600">Highly rated professionals with verified work histories.</p></div><Link href="/artisans" className="hidden items-center gap-2 text-sm font-semibold text-amber-700 sm:flex">View all <ArrowRight size={16}/></Link></div><div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">{featured.map(a => <ArtisanCard key={a.id} artisan={a}/>)}</div><Link href="/artisans" className="mt-8 flex items-center justify-center gap-2 font-semibold text-amber-700 sm:hidden">View all artisans <ArrowRight size={16}/></Link></div></section>
}
