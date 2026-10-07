import {
  BrickWall,
  Hammer,
  HardHat,
  Paintbrush,
  Wrench,
  Zap,
  type LucideIcon,
} from 'lucide-react'
import type { TradeSlug } from '@/types/artisan'

export interface Trade {
  slug: TradeSlug
  label: string
  title: string
  description: string
  icon: LucideIcon
}

export const trades: Trade[] = [
  {
    slug: 'plumbing',
    label: 'Plumbing',
    title: 'Plumbers',
    description: 'Leaks, re-pipes, water heaters and full bathroom fit-outs.',
    icon: Wrench,
  },
  {
    slug: 'roofing',
    label: 'Roofing',
    title: 'Roofers',
    description: 'Shingle, metal and flat roofs, repairs and storm damage.',
    icon: HardHat,
  },
  {
    slug: 'carpentry',
    label: 'Carpentry',
    title: 'Carpenters',
    description: 'Custom built-ins, decks, framing and fine joinery.',
    icon: Hammer,
  },
  {
    slug: 'paving',
    label: 'Paving',
    title: 'Pavers',
    description: 'Driveways, patios, walkways and natural stone work.',
    icon: BrickWall,
  },
  {
    slug: 'electrical',
    label: 'Electrical',
    title: 'Electricians',
    description: 'Panel upgrades, rewiring, lighting and EV chargers.',
    icon: Zap,
  },
  {
    slug: 'painting',
    label: 'Painting',
    title: 'Painters',
    description: 'Interior and exterior painting, staining and finishes.',
    icon: Paintbrush,
  },
]

export const tradeBySlug = Object.fromEntries(
  trades.map((trade) => [trade.slug, trade]),
) as Record<TradeSlug, Trade>

export function isTradeSlug(value: unknown): value is TradeSlug {
  return typeof value === 'string' && value in tradeBySlug
}
