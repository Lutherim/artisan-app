export type TradeSlug =
  | 'plumbing'
  | 'roofing'
  | 'carpentry'
  | 'paving'
  | 'electrical'
  | 'painting'

export interface Review {
  id: string
  author: string
  rating: number
  date: string
  project: string
  comment: string
  verified: boolean
}

export interface PortfolioItem {
  id: string
  title: string
  image: string
  tag: 'Before' | 'After' | 'Completed'
  location: string
  description: string
}

export interface Education {
  institution: string
  qualification: string
  year: number
}

export interface Artisan {
  id: string
  name: string
  businessName: string
  trade: TradeSlug
  city: string
  serviceArea: string
  photo: string
  coverImage: string
  rating: number
  reviewCount: number
  jobsCompleted: number
  yearsExperience: number
  startingRate: number
  responseTime: string
  verified: boolean
  insured: boolean
  shortBio: string
  bio: string
  specialties: string[]
  certifications: string[]
  education: Education[]
  phone: string
  email: string
  portfolio: PortfolioItem[]
  reviews: Review[]
}
