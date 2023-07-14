import { Noto_Sans_Thai } from 'next/font/google'

export const noto_sans_thai = Noto_Sans_Thai({
  subsets: ['latin'],
  variable: '--font-noto-sans-thai',
  display: 'swap',
  fallback: ['sans-serif'],
  adjustFontFallback: true,
})
