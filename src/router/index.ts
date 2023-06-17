import { componentProps } from '@/__VLS_types'
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
    },
    {
      path: '/help',
      name: 'help',
      component: () => import('../pages/sigin/Help.vue')
    },
  ]
})

export default router
