import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'player-view',
      component: () => import('../views/PlayerView.vue')
    },
  ]
})

export default router
