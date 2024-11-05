import { Sora, Overpass } from 'next/font/google'

export const primary = Overpass({
  subsets: ['latin'],
  variable: '--font-primary',
  display: 'auto',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
})

export const secondary = Sora({
  subsets: ['latin'],
  variable: '--font-secondary',
  display: 'auto',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
})
