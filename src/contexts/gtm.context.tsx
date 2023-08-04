'use client'

import { usePathname, useSearchParams } from 'next/navigation'
import { createContext, PropsWithChildren, useEffect } from 'react'
import GoogleTagManager from 'react-gtm-module'
import { ENVIRONMENT } from '@/constants'

interface GTMContextValue {}

interface GTMProviderProviderProps {}

export const GTMContext = createContext<GTMContextValue | null>(null)

export const GTMProvider = ({ children }: PropsWithChildren<GTMProviderProviderProps>) => {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    // Initialize GTM
    if (ENVIRONMENT?.gtmId) {
      GoogleTagManager.initialize({
        gtmId: ENVIRONMENT.gtmId,
      })
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    // Track pageview on route change
    if (ENVIRONMENT?.gtmId) {
      GoogleTagManager.dataLayer({ dataLayer: { event: 'pageview', pagePath: decodeURI(pathname + (searchParams ? '?' + searchParams : '')) } })
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname, searchParams])

  return <GTMContext.Provider value={{}}>{children}</GTMContext.Provider>
}
