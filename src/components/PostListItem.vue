<script setup lang="ts">
import type { HydraContext } from '@/types/api'
import type { Post } from '@/types/post'
import { computed } from 'vue'

const props = defineProps<{
  post: HydraContext<Post>
}>()

const formatedPostedAt = computed(() => {
  const date = new Date(props.post.postedAt)
  return date.toLocaleDateString()
})
</script>

<template>
  <li class="rounded border p-2">
    <RouterLink :to="{ name: 'topics.posts.show', params: { postId: post.id } }">
      <div class="flex items-center gap-x-2 pb-2">
        <div class="size-8 rounded-full bg-primary"></div>

        <div class="leading-4 text-secondary">
          <div>{{ props.post.author.email }}</div>
          <div class="text-sm leading-3.5">{{ formatedPostedAt }}</div>
        </div>
      </div>
      <p class="ms-10 border-t text-black">
        {{ props.post.title }}
      </p>
    </RouterLink>
  </li>
</template>
