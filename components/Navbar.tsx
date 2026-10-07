'use client'

import Link from 'next/link'
import { Menu, Search, X, Wrench } from 'lucide-react'
import { useState } from 'react'

export function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-50 border-b border-stone-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2 font-bold text-slate-900" onClick={() => setOpen(false)}>
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-900 text-white"><Wrench size={19} /></span>
          <span className="text-lg tracking-tight">Artisan<span className="text-amber-600">Find</span></span>
        </Link>
        <nav className="hidden items-center gap-7 md:flex">
          <Link href="/#artisans" className="text-sm font-medium text-stone-600 hover:text-slate-900">Find an Artisan</Link>
          <Link href="/#categories" className="text-sm font-medium text-stone-600 hover:text-slate-900">Browse Trades</Link>
          <Link href="/#list" className="rounded-lg bg-amber-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-amber-700">List Your Business</Link>
        </nav>
        <button className="rounded-lg p-2 text-slate-900 md:hidden" aria-label="Toggle navigation" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
      </div>
      {open && <div className="border-t border-stone-200 bg-white px-4 py-4 md:hidden">
        <div className="flex flex-col gap-2">
          <Link href="/#artisans" onClick={() => setOpen(false)} className="rounded-lg px-3 py-3 font-medium hover:bg-stone-50">Find an Artisan</Link>
          <Link href="/#categories" onClick={() => setOpen(false)} className="rounded-lg px-3 py-3 font-medium hover:bg-stone-50">Browse Trades</Link>
          <Link href="/#list" onClick={() => setOpen(false)} className="flex items-center justify-center gap-2 rounded-lg bg-amber-600 px-4 py-3 font-semibold text-white hover:bg-amber-700"><Search size={17}/> List Your Business</Link>
        </div>
      </div>}
    </header>
  )
}
