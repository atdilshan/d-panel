export interface IAPIState {
  state: 'pending' | 'fulfilled' | 'rejected'
  error?: string
}
