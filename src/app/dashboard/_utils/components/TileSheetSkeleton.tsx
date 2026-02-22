import { Skeleton } from '@mui/material'
import Box from '@mui/material/Box'

const TileSheetSkeleton = () => {
  return (
    <Box sx={ { overflow: 'auto' } }>
      <Box
        sx={ {
          position: 'sticky',
          top: 0,
          zIndex: 999,
          display: 'flex',
          alignItems: 'center',
          p: 1.5,
          bgcolor: 'white',
          borderBottom: '1px solid rgba(0, 0, 0, 0.12)'
        } }
      >
        <Skeleton variant="text" width={ 160 } height={ 28 } />
      </Box>

      <Box
        sx={ {
          position: 'relative',
          width: '100%',
          height: 180,
          borderRadius: '0 0 0.5rem 0.5rem',
          overflow: 'hidden'
        } }
      >
        <Skeleton
          variant="rectangular"
          sx={ { width: '100%', height: '100%' } }
        />
        <Box
          sx={ {
            padding: '0 1.5rem 0',
            width: '100%',
            position: 'absolute',
            bottom: '1rem',
            left: 0,
            zIndex: 2
          } }
        >
          <Skeleton variant="text" width={ 120 } height={ 36 } sx={ { mb: 0.5 } } />
          <Skeleton variant="text" width={ 100 } height={ 20 } />
        </Box>
      </Box>

      <Box sx={ { padding: '0 1.5rem 1rem' } }>
        <Skeleton variant="text" width="100%" height={ 20 } sx={ { mb: 1 } } />
        <Skeleton variant="text" width="100%" height={ 20 } sx={ { mb: 1 } } />
        <Skeleton variant="text" width="85%" height={ 20 } />
      </Box>
    </Box>
  )
}

export default TileSheetSkeleton
