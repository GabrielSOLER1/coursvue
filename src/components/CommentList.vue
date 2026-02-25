<script setup lang="ts">
import type { Collection } from '@/types/api'
import CommentListItem from './CommentListItem.vue'
import type { Comment } from '@/types/comment'

interface propsInterface {
  comments: Collection<Comment>
}

const props = defineProps<propsInterface>()
</script>

<template>
  <ul class="space-y-4">
    <CommentListItem v-for="comment in props.comments.member" :key="comment.id" :comment />
  </ul>
</template>
