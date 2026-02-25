import type { Collection } from '@/types/api'
import { _api } from '.'

export default {
  getCollection: (postId: number) => _api.get<Collection<Comment>>(`/posts/${postId}/comments`),
}
