import Image from 'next/image'

import { Typography } from '@mui/material'
import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import { alpha } from '@mui/material/styles'

import TileSheetSkeleton from './TileSheetSkeleton'
import { IDashboardItem } from '../types/dashboard-items'

interface ITileSheetProps extends IDashboardItem {
  color: string
  open: boolean
  onClose: () => void
  loading?: boolean
}

const TileSheet = (props: ITileSheetProps) => {
  const { title, fullDescription, image, analytics, color, open, onClose, loading = false } = props

  return (
    <Drawer
      anchor="bottom"
      open={ open }
      onClose={ onClose }
      sx={ {
        display: { xs: 'flex', md: 'none' },
        '& .MuiDrawer-paper': {
          maxHeight: '90vh',
          borderRadius: '0.5rem 0.5rem 0 0',
          backgroundColor: 'white',
          borderTop: 1,
          borderColor: alpha(color, 1)
        }
      } }
    >
      { loading ? (
        <TileSheetSkeleton />
      ) : (
        <Box sx={ { overflow: 'auto' } }>
          <Box
            sx={ {
              position: 'sticky',
              top: 0,
              zIndex: 999,
              display: 'flex',
              alignItems: 'center',
              gap: 1,
              p: 1.5,
              bgcolor: 'white',
              borderBottom: 1,
              borderColor: alpha(color, 1)
            } }
          >
            <Typography
              variant="h6"
              fontWeight={ 600 }
              sx={ { color: alpha(color, 0.8) } }
            >
              { title }
            </Typography>
          </Box>

          <Box
            sx={ {
              position: 'relative',
              width: '100%',
              height: 180,
              borderRadius: '0 0.5rem',
              overflow: 'hidden',
              '&::after': {
                content: '""',
                position: 'absolute',
                inset: 0,
                zIndex: 1,
                background:
                  'linear-gradient(to top, white 0%, white 20%, transparent 60%)',
                pointerEvents: 'none'
              }
            } }
          >
            <Image
              src={ image }
              alt={ title }
              width={ 200 }
              height={ 200 }
              style={ {
                display: 'block',
                width: '100%',
                height: '100%',
                objectFit: 'cover'
              } }
            />

            <Box
              sx={ {
                padding: '0 1.5rem 0',
                width: '100%',
                position: 'absolute',
                bottom: '1rem',
                zIndex: 2
              } }
            >
              <Typography
                variant="h4"
                fontWeight={ 700 }
                sx={ { color: alpha(color, 1) } }
              >
                { analytics }
              </Typography>

              <Typography
                variant="body2"
                fontWeight={ 500 }
                sx={ { color: alpha(color, 0.8) } }
              >
                { title }
              </Typography>
            </Box>
          </Box>

          <Box sx={ { padding: '0 1.5rem 1rem' } }>
            <Typography
              variant="body1"
              sx={ { lineHeight: 1.7, color: alpha(color, 0.8) } }
            >
              { fullDescription }
            </Typography>
          </Box>
        </Box>
      ) }
    </Drawer>
  )
}

export default TileSheet
