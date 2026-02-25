import type { HydraContext } from './api'
import type { User } from './user'

export interface Post {
  id: number
  title: string
  content: string
  postedAt: string
  author: User
}

export const defaultPost = (): HydraContext<Post> => ({
  id: 0,
  title: '',
  content: '',
  author: {
    id: 0,
    email: '',
    roles: [],
  },
  postedAt: '',
  '@context': '',
  '@id': '',
  '@type': '',
})
