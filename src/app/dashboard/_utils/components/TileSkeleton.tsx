import { Skeleton } from '@mui/material'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'

const TileSkeleton = () => {
  return (
    <Card
      elevation={ 0 }
      sx={ {
        height: '100%',
        border: '1px solid rgba(0, 0, 0, 0.2)',
        borderRadius: '0.5rem',
        overflow: 'hidden'
      } }
    >
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
            <Skeleton variant="text" width="40%" height={ 20 } sx={ { mb: 0.5 } } />
            <Skeleton variant="text" width="65%" height={ 32 } sx={ { mb: 0.5 } } />
            <Skeleton variant="text" width="55%" height={ 16 } />
          </Box>

          <Skeleton
            variant="rectangular"
            sx={ { position: 'relative', height: '100%', flex: 3 } }
          />
        </Box>
      </Box>
    </Card>
  )
}

export default TileSkeleton
