import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { Toaster } from 'react-hot-toast'
import { noto_sans_thai } from './fonts'

import { GTMProvider } from '@/contexts'
import { ENVIRONMENT } from '@/constants'

import { App } from './App'

import './globals.css'

export const generateMetadata = async (): Promise<Metadata> => {
  const title = 'New Money - Loan for Business'
  const description = 'บริการสินเชื่อ ขั้นตอนการกู้ คุณสมบัติ ติดต่อเรา สอบถาม...'
  const siteName = 'New Money'
  const url = ENVIRONMENT.baseUrl
  const logoUrl = '/logo.jpg'
  const logoAlt = 'Logo'

  return {
    title,
    description,
    keywords: [],
    metadataBase: new URL(url),
    openGraph: {
      type: 'website',
      title: title,
      description,
      siteName,
      url,
      images: {
        url: logoUrl,
        alt: logoAlt,
      },
    },
    twitter: {
      card: 'summary',
      title,
      description,
      site: siteName,
      images: {
        url: logoUrl,
        alt: logoAlt,
      },
    },
    icons: {
      icon: [
        { type: 'image/x-icon', url: '/favicon.ico' },
        { type: 'image/png', sizes: '16x16', url: '/favicon-16x16.png' },
        { type: 'image/png', sizes: '32x32', url: '/favicon-32x32.png' },
      ],
      apple: [{ sizes: '180x180', url: '/apple-touch-icon.png' }],
      other: [{ rel: 'mask-icon', url: '/safari-pinned-tab.svg' }],
    },
    manifest: '/site.webmanifest',
    themeColor: '#ffffff',
  }
}

interface IRootLayoutParams {
  children?: ReactNode
}

const RootLayout = ({ children }: IRootLayoutParams) => {
  return (
    <html lang="th" className={noto_sans_thai.variable}>
      <body>
        <div id="__next">
          <GTMProvider>
            <App>{children}</App>
          </GTMProvider>
          <Toaster />
        </div>
      </body>
    </html>
  )
}

export default RootLayout
