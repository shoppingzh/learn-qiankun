import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [{
  path: '/',
  component: import('@/views/hello.vue')
}, {
  path: '/:pathMatch(.*)*',
  component: import('@/views/404.vue')
}]

export default createRouter({
  history: createWebHistory('/'),
  routes
})

