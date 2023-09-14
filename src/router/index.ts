import {
  createWebHistory,
  createRouter,
} from 'vue-router/auto'

const router = createRouter({
  history: createWebHistory(),
  extendRoutes: (routes) => {
    return routes
  }
})

export default router
