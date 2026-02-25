<script setup lang="ts">
import api from '@/api'
import CommentList from '@/components/CommentList.vue'
import NavBreadcrumb from '@/components/NavBreadcrumb.vue'
import NavBreadcrumItem from '@/components/NavBreadcrumItem.vue'
import { type Collection, defaultCollection, type HydraContext } from '@/types/api'
import type { Comment } from '@/types/comment'
import { defaultPost, type Post } from '@/types/post'
import { defaultTopic, type Topic } from '@/types/topic'
import { onMounted, reactive, ref } from 'vue'

const props = defineProps<{
  postId: number
  topicId: number
}>()

const post = reactive<HydraContext<Post>>(defaultPost())
const topic = reactive<HydraContext<Topic>>(defaultTopic())
const comments = reactive<Collection<Comment>>(defaultCollection())
const isLoading = ref<boolean>(false)

onMounted(async () => {
  isLoading.value = true

  Promise.all([
    api.topics
      .get(props.topicId)
      .then((data) => Object.assign(topic, data))
      .catch(() => Object.assign(topic, defaultTopic())),
    api.posts
      .get(props.postId)
      .then((data) => Object.assign(post, data))
      .catch(() => Object.assign(post, defaultPost())),
    api.comments
      .getCollection(props.postId)
      .then((data) => Object.assign(comments, data))
      .catch(() => Object.assign(comments, defaultCollection())),
  ]).finally(() => (isLoading.value = false))
})
</script>

<template>
  <NavBreadcrumb>
    <NavBreadcrumItem :to="{ name: 'topics' }" label="Topics" />
    <NavBreadcrumItem
      :to="{ name: 'topics.show', params: { topicId: props.topicId } }"
      :label="topic.title"
    />
  </NavBreadcrumb>

  <div class="p-4">
    <div class="mb-4 flex gap-x-2">
      <div class="size-8 rounded-full bg-primary"></div>

      <div class="leading-4">
        <div>Topic * {{ post.postedAt }}</div>
        <div>{{ post.author.email }}</div>
      </div>
    </div>
    <h1 class="text-2xl">{{ post.title }}</h1>
    <div class="mb-8">{{ post.content }}</div>

    <CommentList :comments />
  </div>
</template>
