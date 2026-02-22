import { IDashboardItem } from '../types/dashboard-items'

export const mockDashboardItems: IDashboardItem[] = [
  {
    id: 'mdi-001',
    title: 'Total Revenue',
    description: 'vs last month',
    fullDescription:
      'Total revenue reflects all incoming payments from subscriptions, one-time purchases, and add-ons. Compared to last month, revenue is up 12.4%. Seasonal campaigns and improved conversion contributed to this growth.',
    image: '/images/dashboard/mdi-001.png',
    analytics: 'Rs. 42,580'
  },
  {
    id: 'mdi-002',
    title: 'Active Users',
    description: 'across all plans',
    fullDescription:
      'Active users are accounts that signed in at least once in the last 30 days. This includes free and paid plans. User growth has been steady with a 8% increase from the previous period.',
    image: '/images/dashboard/mdi-002.png',
    analytics: '12,847'
  },
  {
    id: 'mdi-003',
    title: 'Orders',
    description: 'this month',
    fullDescription:
      'Total number of orders processed this month. Includes new orders, renewals, and upgrades. Average order value has increased by 6% compared to the previous month.',
    image: '/images/dashboard/mdi-003.png',
    analytics: '3,284'
  },
  {
    id: 'mdi-004',
    title: 'Payments',
    description: 'pending clearance',
    fullDescription:
      'Payments currently in processing or pending clearance. Most payouts complete within 3–5 business days. You can track each payment in the Transactions section.',
    image: '/images/dashboard/mdi-004.png',
    analytics: 'Rs. 18,920'
  },
  {
    id: 'mdi-005',
    title: 'Reports',
    description: 'scheduled this week',
    fullDescription:
      'Number of reports scheduled for automatic generation and delivery this week. Customize schedules and recipients in the Reports settings. Export formats include PDF and CSV.',
    image: '/images/dashboard/mdi-005.png',
    analytics: '24'
  },
  {
    id: 'mdi-006',
    title: 'Alerts',
    description: 'require attention',
    fullDescription:
      'Alerts that need your review: threshold breaches, failed jobs, or security events. Resolve or dismiss each alert from the list. Configure alert rules in Settings.',
    image: '/images/dashboard/mdi-006.png',
    analytics: '7'
  },
  {
    id: 'mdi-007',
    title: 'Support',
    description: 'satisfaction score',
    fullDescription:
      'Customer support satisfaction from the last 30 days. Based on post-resolution surveys. You can view response times and ticket volume in the Support dashboard.',
    image: '/images/dashboard/mdi-007.png',
    analytics: '98%'
  }
]
