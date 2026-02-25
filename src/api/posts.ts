import type { Collection, HydraContext } from '@/types/api'
import { _api } from '.'
import type { Post } from '@/types/post'
import type { Topic } from '@/types/topic'

export default {
  get: (id: number) => _api.get<HydraContext<Post>>(`/posts/${id}`),
  getCollection: (topicId: Topic['id']) => _api.get<Collection<Post>>(`/topics/${topicId}/posts`),
}
