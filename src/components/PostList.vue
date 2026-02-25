<script setup lang="ts">
import type { Collection } from '@/types/api'
import type { Post } from '@/types/post'
import PostListItem from './PostListItem.vue'

const props = defineProps<{
  posts: Collection<Post>
}>()
</script>

<template>
  Trouvé {{ props.posts.totalItems }} posts.
  <ul class="space-y-4">
    <PostListItem v-for="post in props.posts.member" :key="post.id" :post />
  </ul>
</template>
