import { Skeleton } from '@mui/material'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'

const TileModalSkeleton = () => {
  return (
    <Paper
      sx={ {
        position: 'relative',
        border: '1px solid rgba(0, 0, 0, 0.12)',
        borderRadius: '0.5rem',
        overflow: 'hidden',
        backgroundColor: 'white',
        maxWidth: 500,
        width: '100%'
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
            <Skeleton variant="text" width="50%" height={ 20 } sx={ { mb: 1 } } />
            <Skeleton variant="text" width="70%" height={ 36 } sx={ { mb: 1 } } />
            <Skeleton variant="text" width="40%" height={ 16 } />
          </Box>

          <Skeleton
            variant="rectangular"
            sx={ {
              flex: 3,
              minHeight: 200,
              borderRadius: '0 0.5rem'
            } }
          />
        </Box>
      </Box>

      <Box sx={ { px: 3, pb: 3, pt: 1 } }>
        <Skeleton variant="text" width="100%" height={ 20 } sx={ { mb: 1 } } />
        <Skeleton variant="text" width="100%" height={ 20 } sx={ { mb: 1 } } />
        <Skeleton variant="text" width="90%" height={ 20 } />
      </Box>
    </Paper>
  )
}

export default TileModalSkeleton
