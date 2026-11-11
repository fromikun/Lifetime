import { createRouter, createWebHistory } from 'vue-router'

import home from './modules/home'

const routes = [home]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes,
})

export default router
