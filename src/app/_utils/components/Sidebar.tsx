'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import {
  Box,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography
} from '@mui/material'

import { IMenuItem } from '../types/menu'

interface ISidebarProps {
  menuItems: IMenuItem[]
}

const Sidebar = (props: ISidebarProps) => {
  const { menuItems } = props

  const pathname = usePathname()

  return (
    <Drawer
      variant="permanent"
      sx={ {
        display: { xs: 'none', md: 'block' },
        width: 250,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: 250,
          boxSizing: 'border-box',
          position: 'fixed',
          top: 0,
          bottom: 0,
          left: 0,
          border: 'none',
          borderRight: '1px solid rgba(99, 102, 241,0.3)',
          background:
            'linear-gradient(180deg, #fafbff 0%, #f1f5f9 50%, #eef2ff 100%)'
        }
      } }
    >
      <Box
        sx={ {
          display: 'flex',
          justifyContent: 'center',
          borderBottom: '1px solid rgba(99, 102, 241,0.3)',
          margin: '0 0.5rem',
          padding: '1rem 0'
        } }
      >
        <Typography variant="h5" component="div" fontWeight="700">
          D-Panel
        </Typography>
      </Box>

      <List
        sx={ {
          flex: 1,
          margin: '1rem 0.5rem'
        } }
      >
        { menuItems.map((item) => (
          <ListItemButton
            key={ item.id }
            component={ Link }
            href={ item.url }
            selected={ pathname === item.url }
            sx={ {
              marginBottom: '0.5rem',
              borderRadius: '0.5rem',
              borderLeft: '3px solid transparent',
              '&:hover': {
                borderColor: 'rgba(99, 102, 241,1)',
                backgroundColor: 'rgba(99, 102, 241,0.1) !important',
                '& .MuiListItemIcon-root': { color: 'rgba(99, 102, 241,1)' },
                '& .MuiListItemText-primary': { color: 'rgba(99, 102, 241,1)' }
              },
              '&.Mui-selected': {
                borderColor: 'rgba(99, 102, 241,1)',
                backgroundColor: 'rgba(99, 102, 241,0.1)',
                '& .MuiListItemIcon-root': { color: 'rgba(99, 102, 241,1)' },
                '& .MuiListItemText-primary': {
                  color: 'rgba(99, 102, 241,1)',
                  fontWeight: 600
                }
              }
            } }
          >
            <ListItemIcon>{ item.icon }</ListItemIcon>
            <ListItemText primary={ item.title } />
          </ListItemButton>
        )) }
      </List>

      <Box
        sx={ {
          display: 'flex',
          justifyContent: 'center',
          borderTop: '1px solid rgba(99, 102, 241,0.3)',
          margin: '0 0.5rem',
          padding: '0.5rem'
        } }
      >
        <Box
          sx={ {
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            backgroundColor: 'white',
            width: '100%',
            borderRadius: '0.5rem',
            padding: '0.5rem'
          } }
        >
          <Box
            sx={ {
              minWidth: 40,
              height: 40,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'rgba(99, 102, 241,0.2)',
              borderRadius: '50%'
            } }
          >
            <Typography
              fontWeight="600"
              sx={ {
                fontSize: '0.8rem',
                color: 'rgba(99, 102, 241,1)'
              } }
            >
              DA
            </Typography>
          </Box>

          <Box sx={ { minWidth: 0 } }>
            <Typography
              variant="body2"
              fontWeight="600"
              noWrap
              sx={ {
                color: '#1e293b',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                minWidth: 0
              } }
            >
              Dilshan Antony Thevathas
            </Typography>
            <Typography
              variant="caption"
              noWrap
              sx={ {
                fontSize: '0.7rem',
                color: 'rgba(0, 0, 0, 0.5)'
              } }
            >
              atdilshan@example.com
            </Typography>
          </Box>
        </Box>
      </Box>
    </Drawer>
  )
}

export default Sidebar
