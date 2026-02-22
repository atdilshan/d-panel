'use client'

import Image from 'next/image'

import { Typography } from '@mui/material'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import Paper from '@mui/material/Paper'
import { alpha } from '@mui/material/styles'

import TileModalSkeleton from './TileModalSkeleton'
import { IDashboardItem } from '../types/dashboard-items'

interface ITileModalProps extends IDashboardItem {
  color: string
  open: boolean
  onClose: () => void
  loading?: boolean
}

const TileModal = (props: ITileModalProps) => {
  const {
    title,
    description,
    fullDescription,
    image,
    analytics,
    color,
    open,
    onClose,
    loading = false
  } = props

  return (
    <Modal
      open={ open }
      onClose={ onClose }
      sx={ {
        display: { xs: 'none', md: 'flex' },
        alignItems: 'center',
        justifyContent: 'center',
        p: 2
      } }
    >
      <Box
        sx={ {
          outline: 0,
          maxWidth: 500,
          width: '100%',
          maxHeight: '90vh',
          overflow: 'auto',
          flex: 1
        } }
      >
        { loading ? (
          <TileModalSkeleton />
        ) : (
          <Paper
            sx={ {
              position: 'relative',
              border: 1,
              borderRadius: '0.5rem',
              overflow: 'hidden',
              backgroundColor: 'white',
              borderColor: alpha(color, 1)
            } }
          >
            <Box
              sx={ {
                position: 'relative',
                display: 'flex',
                alignItems: 'center'
              } }
            >
              <Box
                sx={ {
                  display: 'flex',
                  alignItems: 'start',
                  width: '100%',
                  height: '100%'
                } }
              >
                <Box sx={ { padding: '2rem 1.5rem', width: '100%', flex: 2 } }>
                  <Typography
                    variant="body2"
                    fontWeight={ 500 }
                    sx={ { color: alpha(color, 0.8) } }
                  >
                    { title }
                  </Typography>

                  <Typography
                    variant="h4"
                    fontWeight={ 700 }
                    sx={ { color: alpha(color, 1) } }
                  >
                    { analytics }
                  </Typography>

                  <Typography variant="caption" sx={ { color: alpha(color, 0.8) } }>
                    { description }
                  </Typography>
                </Box>

                <Box
                  sx={ {
                    position: 'relative',
                    flex: 3,
                    width: '100%',
                    height: '100%',
                    borderRadius: '0 0.5rem',
                    overflow: 'hidden',
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      inset: 0,
                      zIndex: 1,
                      background: `linear-gradient(to right, ${alpha(color, 0.42)} 0%, ${alpha(color, 0.2)} 25%, transparent 60%)`,
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
                      objectFit: 'cover',
                      objectPosition: 'right center',
                      borderRadius: '0 0.5rem'
                    } }
                  />
                </Box>
              </Box>
            </Box>

            <Box sx={ { px: 3, pb: 3, pt: 1 } }>
              <Typography
                variant="body1"
                sx={ { lineHeight: 1.7, color: alpha(color, 0.8) } }
              >
                { fullDescription }
              </Typography>
            </Box>
          </Paper>
        ) }
      </Box>
    </Modal>
  )
}

export default TileModal
