import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '@/views/HomeView.vue'

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView,
      meta: {
        title: 'Home'
      }
    }
  ]
})

router.beforeEach((to, _from) => {
  document.title = to.meta.title ? `${to.meta.title} — MoBank` : 'MoBank'
})
