'use client'

import { Fragment, useEffect, useState } from 'react'

import { Typography } from '@mui/material'
import Grid from '@mui/material/Grid'
import { useTheme } from '@mui/material/styles'

import TileSkeleton from '@/app/dashboard/_utils/components/TileSkeleton'
import { colors } from '@/utils/constants/colors'
import { IAPIState } from '@/utils/types/api-state'

import Tile from './Tile'
import TileModal from './TileModal'
import TileSheet from './TileSheet'
import {
  IDashboardItem,
  ISelectedDashboardItem
} from '../types/dashboard-items'

const PageChildren = () => {
  const theme = useTheme()

  const [dashboardItems, setDashboardItems] = useState<IDashboardItem[]>([])
  const [dashboardItemsApiState, setDashboardItemsApiState] =
    useState<IAPIState>({
      state: 'pending'
    })
  const [dashboardItem, setDashboardItem] = useState<IDashboardItem | null>(
    null
  )
  const [dashboardItemApiState, setDashboardItemApiState] = useState<IAPIState>(
    {
      state: 'pending'
    }
  )
  const [modalOpen, setModalOpen] = useState<boolean>(false)
  const [selectedItem, setSelectedItem] =
    useState<ISelectedDashboardItem | null>(null)

  useEffect(() => {
    const fetchData = () => {
      setDashboardItemsApiState({ state: 'pending' })

      fetch('api/tiles')
        .then((res) => res.json())
        .then((data) => {
          setDashboardItems(data)
          setDashboardItemsApiState({ state: 'fulfilled' })
        })
        .catch((error) =>
          setDashboardItemsApiState({ state: 'rejected', error: error })
        )
    }

    fetchData()
  }, [])

  useEffect(() => {
    const fetchData = () => {
      setDashboardItemApiState({ state: 'pending' })

      fetch(`api/tiles/${selectedItem?.id}`)
        .then((res) => res.json())
        .then((data) => {
          setDashboardItem(data)
          setDashboardItemApiState({ state: 'fulfilled' })
        })
        .catch((error) =>
          setDashboardItemApiState({ state: 'rejected', error: error })
        )
    }

    if (selectedItem?.id) fetchData()
  }, [selectedItem])

  const modalClose = () => {
    setModalOpen(false)
    setSelectedItem(null)
  }

  return (
    <Fragment>
      <Typography variant="h5" fontWeight={ 600 } sx={ { color: 'rgba(0,0,0)' } }>
        Dashboard
      </Typography>

      <Grid container spacing={ 2 } sx={ { margin: '2rem 0 1rem' } }>
        { dashboardItemsApiState.state === 'pending' &&
          Array.from({ length: 7 }).map((_, index) => (
            <Grid size={ { xs: 12, sm: 6, lg: 4 } } key={ index }>
              <TileSkeleton />
            </Grid>
          )) }
        { dashboardItemsApiState.state === 'fulfilled' &&
          dashboardItems?.map((dashboardItem, index) => (
            <Grid size={ { xs: 12, sm: 6, lg: 4 } } key={ dashboardItem.id }>
              <Tile
                { ...dashboardItem }
                onClick={ () => {
                  setSelectedItem({
                    id: dashboardItem.id,
                    color: colors[index % 7]
                  })
                  setModalOpen(true)
                } }
                color={ colors[index % 7] }
              />
            </Grid>
          )) }
        { dashboardItemsApiState.state === 'rejected' && (
          <Typography
            variant="body2"
            fontWeight={ 400 }
            sx={ {
              width: '100%',
              textAlign: 'center',
              color: theme.palette.error.main
            } }
          >
            Something Went Wrong
          </Typography>
        ) }
      </Grid>

      { selectedItem && (
        <Fragment>
          <TileModal
            { ...dashboardItem! }
            color={ selectedItem.color }
            loading={ dashboardItemApiState.state === 'pending' }
            open={ modalOpen }
            onClose={ modalClose }
          />
          <TileSheet
            { ...dashboardItem! }
            color={ selectedItem.color }
            loading={ dashboardItemApiState.state === 'pending' }
            open={ modalOpen }
            onClose={ modalClose }
          />
        </Fragment>
      ) }
    </Fragment>
  )
}

export default PageChildren
