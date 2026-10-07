import { Navbar } from '@/components/Navbar'
import { Hero } from '@/components/Hero'
import { CategoryGrid } from '@/components/CategoryGrid'
import { FeaturedArtisans } from '@/components/FeaturedArtisans'
import { TrustBanner } from '@/components/TrustBanner'
import { Footer } from '@/components/Footer'

export default function Page() {
  return <><Navbar/><main><Hero/><CategoryGrid/><FeaturedArtisans/><TrustBanner/></main><Footer/></>
}
