import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { BottomNavigation, BottomNavigationAction, Paper } from '@mui/material'

import { IMenuItem } from '../types/menu'

interface BottombarProps {
  menuItems: IMenuItem[]
}

const Bottombar = (props: BottombarProps) => {
  const { menuItems } = props

  const pathname = usePathname()

  return (
    <Paper
      sx={ {
        display: { md: 'none' },
        position: 'fixed',
        bottom: '0',
        left: '0',
        right: '0',
        zIndex: 20,
        background:
          'linear-gradient(180deg, #fafbff 0%, #f1f5f9 50%, #eef2ff 100%)',
        borderTop: '1px solid rgba(99, 102, 241,0.3)'
      } }
    >
      <BottomNavigation
        showLabels
        value={ pathname }
        sx={ {
          backgroundColor: 'transparent',
          '& .MuiBottomNavigationAction-root': {
            '&:hover': {
              backgroundColor: 'rgba(99, 102, 241,0.3)'
            },
            '&:hover .MuiBottomNavigationAction-label': {
              color: 'rgba(99, 102, 241,1)'
            },
            '&.Mui-selected': {
              color: 'rgba(99, 102, 241,1)',
              '& .MuiBottomNavigationAction-label': {
                fontWeight: 600
              }
            }
          },
          '& .MuiBottomNavigationAction-label': {
            fontSize: '0.8rem',
            fontWeight: '500',
            marginTop: '0.3rem'
          },
          '& .MuiBottomNavigationAction-root.Mui-selected': {
            borderColor: 'rgba(99, 102, 241, 1)',
            backgroundColor: 'rgba(99, 102, 241,0.2)'
          }
        } }
      >
        { menuItems.map((item) => (
          <BottomNavigationAction
            key={ item.id }
            component={ Link }
            href={ item.url }
            value={ item.url }
            label={ item.title }
            icon={ item.icon }
            sx={ {
              borderTop: '3px solid transparent'
            } }
          />
        )) }
      </BottomNavigation>
    </Paper>
  )
}

export default Bottombar
