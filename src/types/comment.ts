import type { HydraContext } from './api'
import type { User } from './user'

export interface Comment {
  id: number
  content: string
  postedAt: string
  author: User
}

export const defaultComment = (): HydraContext<Comment> => ({
  id: 0,
  content: '',
  postedAt: '',
  author: {
    id: 0,
    email: '',
    roles: [],
  },
  '@context': '',
  '@id': '',
  '@type': '',
})
