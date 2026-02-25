<script setup lang="ts">
import api from '@/api'
import NavBreadcrumb from '@/components/NavBreadcrumb.vue'
import NavBreadcrumItem from '@/components/NavBreadcrumItem.vue'
import PostList from '@/components/PostList.vue'
import type { Collection, HydraContext } from '@/types/api'
import type { Post } from '@/types/post'
import { defaultTopic, type Topic } from '@/types/topic'
import { onMounted, reactive, ref } from 'vue'

const props = defineProps<{
  topicId: number
}>()

const defaultPostCollection = (): Collection<Post> => ({
  totalItems: 0,
  search: {},
  view: {},
  member: [],
})

const topic = reactive<HydraContext<Topic>>(defaultTopic())
const posts = reactive<Collection<Post>>(defaultPostCollection())
const isLoading = ref(false)

onMounted(async () => {
  isLoading.value = true

  await api.topics
    .get(props.topicId)
    .then((data) => Object.assign(topic, data))
    .catch(() => Object.assign(topic, defaultTopic()))

  if (topic.id === 0) {
    isLoading.value = false
    return
  }

  api.posts
    .getCollection(topic.id)
    .then((data) => Object.assign(posts, data))
    .catch(() => Object.assign(posts, defaultPostCollection()))
    .finally(() => (isLoading.value = false))
})
</script>

<template>
  <NavBreadcrumb>
    <NavBreadcrumItem :to="{ name: 'topics' }" label="Topics" />
  </NavBreadcrumb>
  <div class="p-4">
    <div class="gap-4 md:flex">
      <div class="md:w-6/12 lg:w-9/12">
        <PostList :posts />
      </div>

      <div class="space-y-4 md:w-6/12 lg:w-3/12">
        <p class="text-slate-600">{{ topic.description }}</p>

        <div class="space-y-1">
          <button class="w-full" variant="primary">Nouvelle publication</button>
          <button class="w-full" variant="success">Modifier le topic</button>
          <button class="w-full" variant="danger">Supprimer le topic</button>
        </div>
      </div>
    </div>
  </div>
</template>
