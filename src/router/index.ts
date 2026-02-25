import HomePage from '@/pages/HomePage.vue'
import LoginForm from '@/pages/LoginForm.vue'
import PostPage from '@/pages/PostPage.vue'
import TopicsPage from '@/pages/TopicsPage.vue'
import TopicsShowPage from '@/pages/TopicsShowPage.vue'
import { useAuthStore } from '@/stores/auth'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'homepage',
      component: HomePage,
      meta: { requiresAuth: true },
    },
    {
      path: '/login',
      name: 'login',
      component: LoginForm,
    },
    {
      path: '/topics',
      meta: { requiresAuth: true },
      children: [
        {
          path: '',
          name: 'topics',
          component: TopicsPage,
        },
        {
          path: ':topicId(\\d+)',
          children: [
            {
              path: '',
              props: (route) => ({ topicId: Number.parseInt(route.params.topicId as string) }),
              name: 'topics.show',
              component: TopicsShowPage,
            },
            {
              path: 'posts/:postId(\\d+)',
              name: 'topics.posts.show',
              props: (route) => ({
                postId: Number.parseInt(route.params.postId as string),
                topicId: Number.parseInt(route.params.topicId as string),
              }),
              component: PostPage,
            },
          ],
        },
      ],
    },
  ],
})

router.beforeEach(async (to, from, next) => {
  const authStore = useAuthStore()
  await authStore.loadUser()

  if (to.matched.some((route) => route.meta?.requiresAuth === true && !authStore.isLoggedIn)) {
    return next({ name: 'login' })
  }
  return next()
})

export default router
