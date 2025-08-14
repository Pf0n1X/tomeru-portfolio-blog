"use client"

import { PageTransition } from "./PageTransition"

interface MainLayoutProps {
  children: React.ReactNode
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <PageTransition>
      {children}
    </PageTransition>
  )
}
