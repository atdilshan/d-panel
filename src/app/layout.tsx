import { ReactNode } from 'react'
import type { Metadata } from 'next'

import LayoutChildren from '@/app/_utils/components/LayoutChildren'

import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'D-Panel',
    template: '%s | D-Panel'
  },
  description: 'D-Panel For All Types of Admin Dashboard'
}

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <LayoutChildren>{ children }</LayoutChildren>
      </body>
    </html>
  )
}
