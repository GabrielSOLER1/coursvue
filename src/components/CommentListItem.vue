<script setup lang="ts">
import type { HydraContext } from '@/types/api'
import type { Comment } from '@/types/comment'
import { computed } from 'vue'

interface propsInterface {
  comment: HydraContext<Comment>
}

const props = defineProps<propsInterface>()

const formattedPostedAt = computed(() =>
  new Intl.DateTimeFormat(undefined, {
    dateStyle: 'medium',
    timeStyle: 'short',
  }).format(new Date(props.comment.postedAt)),
)
</script>

<template>
  <li class="flex gap-x-4">
    <div class="mt-1 size-8 rounded-full bg-primary"></div>

    <div class="space-y-2">
      <div class="leading-5">
        <div class="font-bold">{{ props.comment.author.email }}</div>
        <div>{{ formattedPostedAt }}</div>
      </div>

      <div>{{ props.comment.content }}</div>
    </div>
  </li>
</template>
