import { NextResponse } from 'next/server'

import { mockDashboardItems } from './_utils/constants/mock-dashboard-items'

export const GET = async() => {
  await new Promise((resolve) => setTimeout(resolve, 2000))

  const data = mockDashboardItems.map((item) => {
    return {
      id: item.id,
      title: item.title,
      description: item.description,
      image: item.image,
      analytics: item.analytics
    }
  })

  return NextResponse.json(data)
}
