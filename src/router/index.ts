import HomePage from '@/pages/HomePage.vue'
import LoginForm from '@/pages/LoginForm.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'homepage',
      component: () => HomePage,
    },
    {
      path: '/login',
      name: 'login',
      component: () => LoginForm,
    },
  ],
})

export default router
