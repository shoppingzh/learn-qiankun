import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Layout from '@/views/layout.vue'

const routes: RouteRecordRaw[] = [{
  path: '/',
  component: Layout,
  children: [{
    path: '',
    component: import('@/views/index.vue')
  }, {
    path: 'hello',
    component: import('@/views/hello.vue')
  }]
}/*, {
  path: '/:pathMatch(.*)*',
  component: import('@/views/404.vue')
}*/]

export default createRouter({
  history: createWebHistory('/'),
  routes
})


