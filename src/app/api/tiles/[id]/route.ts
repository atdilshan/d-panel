import { NextResponse } from 'next/server'

import { mockDashboardItems } from '../_utils/constants/mock-dashboard-items'

export const GET = async(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) => {
  await new Promise((resolve) => setTimeout(resolve, 2000))
  
  const { id } = await params

  const item = mockDashboardItems.find((item) => item.id === id)

  if (!item) {
    return NextResponse.json({ error: 'Not Found' }, { status: 404 })
  }

  return NextResponse.json(item)
}
