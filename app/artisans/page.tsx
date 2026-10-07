import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { ArtisanDirectory } from '@/components/ArtisanDirectory'

export default async function ArtisansPage({ searchParams }: { searchParams: Promise<{ trade?: string; location?: string; q?: string }> }) {
  const filters = await searchParams
  return <><Navbar/><ArtisanDirectory initialFilters={filters}/><Footer/></>
}
