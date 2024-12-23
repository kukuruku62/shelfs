import { Inter, Lobster } from 'next/font/google'

export const lobster = Lobster({
  variable: '--font-lobster',
  subsets: ["cyrillic"],
  display: "swap",
  weight: "400",
})

export const inter = Inter({
  variable: '--font-inter',
  subsets: ["cyrillic"],
  display: "swap",
})