'use client'

import Link from 'next/link'

import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

const NotFound = () => {
  return (
    <Box
      sx={ {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 2
      } }
    >
      <Typography component="h1" variant="h3" fontWeight="700">
        Page not found
      </Typography>

      <Typography variant="body1" color="text.secondary">
        The page you are looking for does not exist.
      </Typography>

      <Button
        component={ Link }
        href="/dashboard"
        variant="contained"
        sx={ {
          backgroundColor: 'rgba(99, 102, 241, 1)',
          '&:hover': {
            backgroundColor: 'rgba(79, 70, 229, 1)'
          }
        } }
      >
        Go to Dashboard
      </Button>
    </Box>
  )
}

export default NotFound
