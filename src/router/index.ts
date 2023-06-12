import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../pages/sigin/Home.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../pages/sigin/Sigin.vue')
    }
  ]
})

export default router
