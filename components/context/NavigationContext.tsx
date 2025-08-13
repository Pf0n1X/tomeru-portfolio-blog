"use client"

import { createContext, useContext, useState, ReactNode } from 'react'

interface NavigationContextType {
  clickPosition: { x: number; y: number } | null
  setClickPosition: (position: { x: number; y: number } | null) => void
}

const NavigationContext = createContext<NavigationContextType | undefined>(undefined)

export function NavigationProvider({ children }: { children: ReactNode }) {
  const [clickPosition, setClickPosition] = useState<{ x: number; y: number } | null>(null)

  return (
    <NavigationContext.Provider value={{ clickPosition, setClickPosition }}>
      {children}
    </NavigationContext.Provider>
  )
}

export function useNavigation() {
  const context = useContext(NavigationContext)
  if (context === undefined) {
    throw new Error('useNavigation must be used within a NavigationProvider')
  }
  return context
}
