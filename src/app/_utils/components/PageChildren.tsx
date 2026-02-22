'use client'

import Link from 'next/link'

import Box from '@mui/material/Box'
import Button from '@mui/material/Button'

const PageChildren = () => {
  return (
    <Box sx={ { display: 'flex', justifyContent: 'center' } }>
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
        Open Dashboard
      </Button>
    </Box>
  )
}

export default PageChildren
