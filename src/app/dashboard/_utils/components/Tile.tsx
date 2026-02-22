import Image from 'next/image'

import { Typography } from '@mui/material'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardActionArea from '@mui/material/CardActionArea'
import { alpha } from '@mui/material/styles'

import { IDashboardItem } from '../types/dashboard-items'

interface ITileProps extends IDashboardItem {
  color: string
  onClick: () => void
}

const Tile = (props: ITileProps) => {
  const { title, description, image, color, analytics, onClick } = props

  return (
    <Card
      elevation={ 0 }
      sx={ {
        height: '100%',
        border: 1,
        borderRadius: '0.5rem',
        overflow: 'hidden',
        backgroundColor: alpha(color, 0.14),
        borderColor: alpha(color, 1)
      } }
    >
      <CardActionArea onClick={ onClick } sx={ { height: '100%' } }>
        <Box
          sx={ {
            position: 'relative',
            height: '100%',
            minHeight: 150
          } }
        >
          <Box
            sx={ {
              display: 'flex',
              alignItems: 'center',
              width: '100%',
              height: '100%'
            } }
          >
            <Box sx={ { padding: '0 1rem', width: '100%', flex: 2 } }>
              <Typography
                variant="body2"
                fontWeight={ 500 }
                sx={ { color: alpha(color, 0.8) } }
              >
                { title }
              </Typography>

              <Typography variant="h4" fontWeight={ 700 } sx={ { color: color } }>
                { analytics }
              </Typography>

              <Typography variant="caption" sx={ { color: alpha(color, 0.8) } }>
                { description }
              </Typography>
            </Box>

            <Box
              sx={ {
                position: 'relative',
                height: '100%',
                flex: 3,
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
                fill={ true }
                style={ {
                  objectFit: 'cover'
                } }
              />
            </Box>
          </Box>
        </Box>
      </CardActionArea>
    </Card>
  )
}

export default Tile
