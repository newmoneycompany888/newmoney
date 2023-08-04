import { useContext } from 'react'
import { GTMContext } from '@/contexts'

export const useGTM = () => {
  const contextData = useContext(GTMContext)
  if (!contextData) {
    throw new Error('Invalid GTM Context')
  }
  return contextData
}
