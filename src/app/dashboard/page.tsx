import { Metadata } from 'next'

import PageChildren from './_utils/components/PageChildren'

export const metadata: Metadata = {
  title: 'Dashboard'
}

const DashboardPage = () => {
  return <PageChildren />
}

export default DashboardPage
