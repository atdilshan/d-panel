'use client'

import { ReactNode } from 'react'

import { Analytics, Settings } from '@mui/icons-material'
import DashboardIcon from '@mui/icons-material/Dashboard'
import { Box, Container, CssBaseline } from '@mui/material'

import Bottombar from '@/app/_utils/components/Bottombar'
import Sidebar from '@/app/_utils/components/Sidebar'
import { IMenuItem } from '@/app/_utils/types/menu'

const LayoutChildren = ({ children }: { children: ReactNode }) => {
  const menuItems: IMenuItem[] = [
    {
      id: 'mi-001',
      title: 'Dashboard',
      icon: <DashboardIcon />,
      url: '/dashboard'
    },
    {
      id: 'mi-002',
      title: 'Analytics',
      icon: <Analytics />,
      url: '/analytics'
    },
    {
      id: 'mi-003',
      title: 'Settings',
      icon: <Settings />,
      url: '/settings'
    }
  ]

  return (
    <Box sx={ { display: 'flex', minHeight: '100vh' } }>
      <CssBaseline />
      <Sidebar menuItems={ menuItems } />
      <Box component="main" sx={ { padding: '2rem', flex: 1 } }>
        <Container maxWidth="lg" disableGutters>
          { children }
        </Container>
      </Box>
      <Bottombar menuItems={ menuItems } />
    </Box>
  )
}

export default LayoutChildren
