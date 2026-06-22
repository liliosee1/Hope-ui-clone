import { useContext } from 'react'
import { ImageContext } from './ImageContext'

export function useImageContext() {
  const context = useContext(ImageContext)
  if (!context) {
    throw new Error('useImageContext must be used inside ImageProvider')
  }
  return context
}
