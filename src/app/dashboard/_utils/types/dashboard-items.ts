export interface IDashboardItem {
  id: string
  title: string
  description: string
  fullDescription?: string
  image: string
  analytics: string
}

export interface ISelectedDashboardItem {
  id: string
  color: string
}
